import { createContext, useCallback, useContext, useState } from 'react';
import { ThemeList } from "./ThemeList.js";
import PropTypes from "prop-types";

const ThemeContext = createContext(ThemeList.LIGHT);
export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(ThemeList.LIGHT);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === ThemeList.LIGHT ? ThemeList.DARK : ThemeList.LIGHT));
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggle: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};