import PropTypes from "prop-types";

const Tab = ({label, onClick, isActive, id}) => {
    return <button
        className={'tab' + (isActive(id) ? ' active-tab' : '')}
        onClick={() => {
            onClick(id);
        }}
    >
        {label}
    </button>
}

Tab.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.func,
    id: PropTypes.number,
}
export default Tab;