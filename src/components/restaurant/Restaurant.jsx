'use client'

import styles from "./styles.module.css";
import NavBarItem from "../navBarItem/NavBarItem.jsx";
import { RestaurantPartList } from "./RestaurantPartList.js";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import PropTypes from "prop-types";

const Restaurant = ({id, name}) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!(pathname.endsWith(RestaurantPartList.MENU) || pathname.endsWith(RestaurantPartList.REVIEWS))) {
            router.replace('/restaurants/' + id + '/' + RestaurantPartList.MENU)
        }
    }, [id, router, pathname]);


    return (
        <>
            <div className={styles.restaurant}>
                <div className={styles.header}>{name ?? 'Unnamed'}</div>
                <div className={styles.buttonRow}>
                    <NavBarItem label={'Menu'} path={'/restaurants/' + id + '/' + RestaurantPartList.MENU}
                                active={pathname.endsWith(RestaurantPartList.MENU)}/>
                    <NavBarItem label={'Reviews'} path={'/restaurants/' + id + '/' + RestaurantPartList.REVIEWS}
                                active={pathname.endsWith(RestaurantPartList.REVIEWS)}/>
                </div>
            </div>
        </>
    );
}

Restaurant.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}
export default Restaurant;
