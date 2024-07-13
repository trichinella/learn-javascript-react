import React, {useState} from "react";

export const NavTabs = ({elements}) => {
    if (elements.length === 0) {
        return null;
    }

    const [activeElement, setActiveElement] = useState(elements.find(element => element !== undefined));

    const isActive = (element) => {
        return element.key === activeElement.key;
    };

    const change = (element) => {
        if (!isActive(element)) {
            setActiveElement(element);
        }
    };

    return (
        <>
            <div className={'tab-header-panel'}>
                {elements.map(element => {
                    return <input
                        className={'tab' + (isActive(element) ? ' active-tab' : '')}
                        type={"button"}
                        key={'label' + element.key} value={element.label}
                        onClick={() => {
                            change(element)
                        }}
                    />
                })}
            </div>

            <div className={'tab-content'}>
                {activeElement.children}
            </div>
        </>
    )
}