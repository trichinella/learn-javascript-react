import React from "react";
import {restaurants} from "../constants/mock.js";
import {Restaurant} from "./restaurant/Restaurant";
import {Layout} from "./layout/Layout";
import 'reset-css';
import {NavTabs} from "./navTabs/NavTabs";

export const App = () => {
    return (<Layout>
        <NavTabs elements={
            restaurants.map(restaurant=>{
                return {
                    key: restaurant.id,
                    label: restaurant.name,
                    children: <Restaurant key={restaurant.id} restaurant={restaurant}/>,
                };
            })
        }/>
    </Layout>)
}