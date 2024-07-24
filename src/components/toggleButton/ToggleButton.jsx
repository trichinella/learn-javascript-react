import React from 'react';
import Button from "../button/Button.jsx";
import { useThemeContext } from "../themeProvider/ThemeProvider.jsx";

const ToggleButton = () => {
    const {toggle} = useThemeContext();

    return (
        <Button onClick={() => {
            toggle();
        }}>
            Toggle theme
        </Button>
    );
};

ToggleButton.propTypes = {};

export default ToggleButton;