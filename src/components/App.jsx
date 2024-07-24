import { restaurants } from "../constants/mock.js";
import Restaurant from "./restaurant/Restaurant";
import { Layout } from "./layout/Layout";
import 'reset-css';
import TabList from "./tabList/TabList.jsx";
import ScrollProgressBar from "./scrollProgressBar/ScrollProgressBar.jsx";
import { ThemeProvider } from "./themeProvider/ThemeProvider.jsx";
import { UserProvider } from "./userProvider/UserProvider.jsx";

export const App = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <Layout>
                    <ScrollProgressBar/>
                    <TabList elements={
                        restaurants.map(restaurant => {
                            return {
                                key: restaurant.id,
                                label: restaurant.name,
                                children: <Restaurant key={restaurant.id} restaurant={restaurant}/>,
                            };
                        })
                    }/>
                </Layout>
            </UserProvider>
        </ThemeProvider>
    )
}