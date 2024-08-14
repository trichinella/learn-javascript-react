import Footer from "../components/footer/Footer.jsx";
import styles from "./styles.module.css";
import ScrollProgressBar from "../components/scrollProgressBar/ScrollProgressBar.jsx";
import Header from "../components/header/Header.jsx";
import 'reset-css';
import PropTypes from "prop-types";

export const metadata = {
    title: "React course",
    description: "react course description",
};

function RootLayout({children}) {
    return (
        <html lang='en'>
        <body>
        <div id='root'>
            <div className={styles.container}>
                <Header/>
                <ScrollProgressBar/>
                <main className={styles.main}>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

export default RootLayout;