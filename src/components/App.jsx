import 'reset-css';
import { ThemeProvider } from "./themeProvider/ThemeProvider.jsx";
import { UserProvider } from "./userProvider/UserProvider.jsx";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "../helpers/routing/baseRouter.jsx";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <UserProvider>
                    <RouterProvider router={router} />
                </UserProvider>
            </ThemeProvider>
        </Provider>
    )
}