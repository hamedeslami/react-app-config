import { toast } from "react-toastify";
import { store } from "../store/store.js";
import { logout } from "../store/user/user.reducers";

// const axiosInstance = axios.create();

const BASE_API_URL = "http://127.0.0.1:8000/api/v1";

const onForbiden = () => {
    store.dispatch(logout());
};

const onRequest = (config) => {
    const newConfig = { ...config };
    const {
        user: { token },
    } = store.getState();

    newConfig.baseURL = BASE_API_URL;
    newConfig.headers["Content-Type"] = "application/json";
    newConfig.headers["Authorization"] = "Bearer " + token;

    return newConfig;
};

const onRequestError = (error) => {
    return Promise.reject(error);
};

const onResponse = (response) => {
    return response.data;
};

const onResponseError = async (error) => {
    const realError = error.response;

    if (realError.status && +realError.status === 401) {
        return onForbiden();
    } else if (realError.status && +realError.status === 403) {
        onForbiden();
    }

    toast.error(realError.data?.data.message || error.message);
    return Promise.reject(realError || error);
};

export const setupInterceptorsTo = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};
