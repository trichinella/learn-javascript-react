import React, {useState} from "react";
import {Tab} from "./Tab";

export const TabList = ({elements}) => {
    if (elements.length === 0) {
        return null;
    }

    const [activeId, setActiveId] = useState(elements.find(element => element !== undefined).key);

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