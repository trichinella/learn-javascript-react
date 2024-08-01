import Auth from "../auth/Auth.jsx";
import styles from "./styles.module.css";
import ToggleButton from "../toggleButton/ToggleButton.jsx";
import NavBar from "../navBar/NavBar.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerPanel}>
                <div className={styles.mainPanel}>
                    <NavBar/>
                </div>
                <ToggleButton/>
                <Auth/>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;