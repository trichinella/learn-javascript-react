import { useCallback, useEffect, useState } from 'react';
import { getScrollPercentage } from "../../helpers/scroll.js";
import { throttle } from "throttle-debounce";

const ScrollProgressBar = () => {
    const [percentage, setPercentage] = useState(getScrollPercentage())

    const onScroll = useCallback(throttle(40, () => {
        setPercentage(getScrollPercentage());
    }), []);

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [onScroll]);

    return (
        <div className={"scroll-progress-bar"} style={{width: percentage + 'vw'}}></div>
    );
};

ScrollProgressBar.propTypes = {};

export default ScrollProgressBar;