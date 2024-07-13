import React from "react";
import {restaurants} from "../constants/mock.js";
import {Restaurant} from "./restaurant/Restaurant";
import {Layout} from "./layout/Layout";
import 'reset-css';
import {TabList} from "./tabList/TabList.jsx";

export const App = () => {
    return (<Layout>
        <TabList elements={
            restaurants.map(restaurant => {
                return {
                    key: restaurant.id,
                    label: restaurant.name,
                    children: <Restaurant key={restaurant.id} restaurant={restaurant}/>,
                };
            })
        }/>
    </Layout>)
}