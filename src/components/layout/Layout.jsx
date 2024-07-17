import PropTypes from "prop-types";

export const Layout = ({children}) => {
    return (
        <div className={"container"}>
            <header>Very useful header</header>
            <main>{children}</main>
            <footer>Very useful footer</footer>
        </div>
    )
}


Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}
export default Layout;