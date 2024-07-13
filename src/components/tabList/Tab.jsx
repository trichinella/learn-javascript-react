export const Tab = ({label, onClick, isActive, id}) => {
    return <input
        className={'tab' + (isActive(id) ? ' active-tab' : '')}
        type={"button"}
        value={label}
        onClick={() => {
            onClick(id);
        }}
    />
}