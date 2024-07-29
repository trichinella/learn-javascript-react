import PropTypes from "prop-types";
import Button from "../button/Button.jsx";

const Tab = ({label, onClick, isActive, id}) => {
    return <Button
        active={isActive(id)}
        onClick={() => {
            onClick(id);
        }}
    >
        {label}
    </Button>
}

Tab.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    onClick: PropTypes.func,
    isActive: PropTypes.func,
    id: PropTypes.string,
}
export default Tab;