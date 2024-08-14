import styles from "./styles.module.css";
import NavBar from "../navBar/NavBar.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerPanel}>
                <div className={styles.mainPanel}>
                    <NavBar/>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;