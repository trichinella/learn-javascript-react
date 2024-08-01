import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button.jsx";

const ButtonGroup = ({elements, defaultId}) => {
    const navigate = useNavigate();

    if (elements.length === 0) {
        return null;
    }

    const isActive = (id) => {
        return id === defaultId;
    };

    const getActiveElement = (id) => {
        return elements.find(element => element.key === id);
    };

    const change = (id) => {
        if (!isActive(id)) {
            navigate(getActiveElement(id).href);
        }
    };

    return (
        <div className={styles.tabHeaderPanel}>
            {elements.map(element => {
                return <Button
                    key={'button-' + element.key}
                    active={isActive(element.key)}
                    onClick={() => change(element.key)}
                >
                    {element.label}
                </Button>
            })}
        </div>
    )
}

ButtonGroup.propTypes = {
    elements: PropTypes.array,
    defaultId: PropTypes.string,
}
export default ButtonGroup;