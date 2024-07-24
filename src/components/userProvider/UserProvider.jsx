import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext('');
export const useUserContext = () => useContext(UserContext);

export function UserProvider({children}) {
    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};