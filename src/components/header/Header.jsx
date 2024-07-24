import Button from "../button/Button.jsx";
import { useThemeContext } from "../themeProvider/ThemeProvider.jsx";
import Auth from "../auth/Auth.jsx";
import styles from "./styles.module.css";

const Header = () => {
    const {toggle} = useThemeContext();

    return (
        <header>
            <div className={styles.headerPanel}>
                <div className={styles.mainPanel}>
                    <Button onClick={() => {
                        toggle();
                    }}>
                        Toggle theme
                    </Button>
                </div>
                <Auth/>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;