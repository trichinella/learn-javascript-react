import { Layout } from "./layout/Layout";
import 'reset-css';
import ScrollProgressBar from "./scrollProgressBar/ScrollProgressBar.jsx";
import { ThemeProvider } from "./themeProvider/ThemeProvider.jsx";
import { UserProvider } from "./userProvider/UserProvider.jsx";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import RestaurantList from "./restaurantList/RestaurantList.jsx";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <UserProvider>
                    <Layout>
                        <ScrollProgressBar/>
                        <RestaurantList/>
                    </Layout>
                </UserProvider>
            </ThemeProvider>
        </Provider>
    )
}