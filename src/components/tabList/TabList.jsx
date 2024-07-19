import { useState } from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const TabList = ({elements}) => {
    const [activeId, setActiveId] = useState(elements.length > 0 ? elements.find(element => element !== undefined).key : null);

    if (elements.length === 0) {
        return null;
    }

    const isActive = (id) => {
        return id === activeId;
    };

    const change = (id) => {
        if (!isActive(id)) {
            setActiveId(id);
        }
    };

    return (
        <>
            <div className={'tab-header-panel'}>
                {elements.map(element => {
                    return <Tab
                        key={'tab' + element.key}
                        id={element.key}
                        isActive={isActive}
                        onClick={change}
                        label={element.label}
                    />
                })}
            </div>


            <div className={'tab-content'}>
                {elements.find(element => element.key === activeId).children}
            </div>
        </>
    )
}

TabList.propTypes = {
    elements: PropTypes.array,
}
export default TabList;