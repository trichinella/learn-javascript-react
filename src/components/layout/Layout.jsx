import PropTypes from "prop-types";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ScrollProgressBar from "../scrollProgressBar/ScrollProgressBar.jsx";
import UserFlowSection from "../userFlowSection/UserFlowSection.jsx";
import styles from "./styles.module.css";

export const Layout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <ScrollProgressBar/>
            <main className={styles.main}>
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