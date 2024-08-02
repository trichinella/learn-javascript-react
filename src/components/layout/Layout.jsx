import PropTypes from "prop-types";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ScrollProgressBar from "../scrollProgressBar/ScrollProgressBar.jsx";
import UserFlowSection from "../userFlowSection/UserFlowSection.jsx";

export const Layout = () => {
    return (
        <div className={"container"}>
            <Header/>
            <ScrollProgressBar/>
            <main>
                <Outlet/>
            </main>
            <UserFlowSection/>
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