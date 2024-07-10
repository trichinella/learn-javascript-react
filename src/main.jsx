import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {restaurants} from "./mock.js";

ReactDOM.createRoot(document.getElementById('root')).render(<div className={"restaurant-list"}>
    <div className={"restaurant"}>
        <div className={"restaurant-header"}>{restaurants[0].name}</div>
        <h3>Меню</h3>
        <ul className={"menu-list"}>
            <li>{restaurants[0].menu[0].name}</li>
            <li>{restaurants[0].menu[1].name}</li>
            <li>{restaurants[0].menu[2].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul className={"review-list"}>
            <li>{restaurants[0].reviews[0].text}</li>
            <li>{restaurants[0].reviews[1].text}</li>
        </ul>
    </div>
    <div className={"restaurant"}>
        <div className={"restaurant-header"}>{restaurants[1].name}</div>
        <h3>Меню</h3>
        <ul className={"menu-list"}>
            <li>{restaurants[1].menu[0].name}</li>
            <li>{restaurants[1].menu[1].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul className={"review-list"}>
            <li>{restaurants[1].reviews[0].text}</li>
            <li>{restaurants[1].reviews[1].text}</li>
            <li>{restaurants[1].reviews[2].text}</li>
        </ul>
    </div>
    <div className={"restaurant"}>
        <div className={"restaurant-header"}>{restaurants[2].name}</div>
        <h3>Меню</h3>
        <ul className={"menu-list"}>
            <li>{restaurants[2].menu[0].name}</li>
            <li>{restaurants[2].menu[1].name}</li>
            <li>{restaurants[2].menu[2].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul className={"review-list"}>
            <li>{restaurants[2].reviews[0].text}</li>
        </ul>
    </div>
    <div className={"restaurant"}>
        <div className={"restaurant-header"}>{restaurants[3].name}</div>
        <h3>Меню</h3>
        <ul className={"menu-list"}>
            <li>{restaurants[3].menu[0].name}</li>
            <li>{restaurants[3].menu[1].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul className={"review-list"}>
            <li>{restaurants[3].reviews[0].text}</li>
            <li>{restaurants[3].reviews[1].text}</li>
        </ul>
    </div>
</div>);