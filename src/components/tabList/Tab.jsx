export const Tab = ({label, onClick, isActive, id}) => {
    return <button
        className={'tab' + (isActive(id) ? ' active-tab' : '')}
        onClick={() => {
            onClick(id);
        }}
    >
        {label}
    </button>
}