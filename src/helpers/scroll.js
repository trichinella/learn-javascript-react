export const getScrollPercentage = () => {
    if (!document.body.scrollHeight || !window.scrollY) {
        return 0;
    }

    return Math.min(Math.ceil(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100), 100);
};