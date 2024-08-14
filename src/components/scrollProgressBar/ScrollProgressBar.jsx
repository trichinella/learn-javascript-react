'use client'

import { useEffect, useState } from 'react';
import { getScrollPercentage } from "../../helpers/scroll.js";
import { throttle } from "throttle-debounce";
import styles from "./styles.module.css";

const ScrollProgressBar = () => {
    const [percentage, setPercentage] = useState();

    useEffect(() => {
        const onScroll =  throttle(40, () => {
            setPercentage(getScrollPercentage());
        });

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={styles.scrollProgressBar} style={{width: percentage + 'vw'}}></div>
    );
};

ScrollProgressBar.propTypes = {};

export default ScrollProgressBar;