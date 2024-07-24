import PropTypes from "prop-types";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export const Layout = ({children}) => {
    return (
        <div className={"container"}>
            <Header/>
            <main>{children}</main>
            <Footer/>
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