import { useCallback, useEffect, useState } from 'react';

const ScrollProgressBar = () => {
    const getCurrentPercentage = useCallback(() => {
        if (!document.body.scrollHeight || !window.scrollY) {
            return 0;
        }

        return Math.min(Math.ceil(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100), 100);
    }, [])

    const [percentage, setPercentage] = useState(getCurrentPercentage())

    const onScroll = useCallback(() => {
        setPercentage(getCurrentPercentage());
    }, [getCurrentPercentage]);

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [percentage, onScroll]);

    return (
        <div className={"scroll-progress-bar"} style={{width: percentage + 'vw'}}></div>
    );
};

ScrollProgressBar.propTypes = {};

export default ScrollProgressBar;