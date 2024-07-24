import Auth from "../auth/Auth.jsx";
import styles from "./styles.module.css";
import ToggleButton from "../toggleButton/ToggleButton.jsx";

const Header = () => {
    return (
        <header>
            <div className={styles.headerPanel}>
                <div className={styles.mainPanel}>
                    <ToggleButton/>
                </div>
                <Auth/>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;