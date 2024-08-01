import NavBarItem from "../navBarItem/NavBarItem.jsx";
import styles from "./styles.module.css";

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <NavBarItem label="Home" path={"/"}/>
            <NavBarItem label="Restaurants" path={"/restaurants"}/>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;