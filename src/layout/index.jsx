import PropTypes from "prop-types";

export default function Layout({
                                   showFooter = false,
                                   showSidebar = false,
                                   showHeader = false,
                                   showNavbar = false,
                                   children,
                               }) {
    return (
        <>Layout</>
    )
}


Layout.propTypes = {
    children: PropTypes.elementType,
    showHeader: PropTypes.bool,
    showNavbar: PropTypes.bool,
    showSidebar: PropTypes.bool,
    showFooter: PropTypes.bool,
}