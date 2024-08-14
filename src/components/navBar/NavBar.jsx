'use client'

import NavBarItem from "../navBarItem/NavBarItem.jsx";
import styles from "./styles.module.css";
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.navBar}>
            <NavBarItem label="Home" path={"/"} active={"/" === pathname}/>
            <NavBarItem label="Restaurants" path={"/restaurants"} active={pathname.startsWith('/restaurant')}/>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;