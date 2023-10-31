import PropTypes from "prop-types";
import {HomePage} from '@src/pages';
import Layout from "@src/layout";

const ElementCreator = ({Component, showHeader, showNavbar, showSidebar, showFooter}) => {
    return (
        <Layout showHeader={showHeader} showNavbar={showNavbar} showSidebar={showSidebar} showFooter={showFooter}>
            <Component/>
        </Layout>
    );
};


export const routes = [
    {
        route: "/",
        Element: ElementCreator({
            Component: HomePage,
            showHeader: true,
            showNavbar: true,
            showSidebar: true,
            showFooter: true,
        }),
    },
];

const allwaysShowRoutes = ['/'];
const beforeAuthRoutes = [];

export const filterRoutesByAuthStep = (isAuth) => {
    return routes.filter((item) => {
        if (!isAuth) {
            if (
                beforeAuthRoutes.includes(item.route) ||
                allwaysShowRoutes.includes(item.route)
            ) {
                return item;
            }
        } else if (
            !beforeAuthRoutes.includes(item.route) ||
            allwaysShowRoutes.includes(item.route)
        ) {
            return item;
        }
    });
};


ElementCreator.propTypes = {
    Component: PropTypes.elementType,
    showHeader: PropTypes.bool,
    showNavbar: PropTypes.bool,
    showSidebar: PropTypes.bool,
    showFooter: PropTypes.bool,
}