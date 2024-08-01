import { useUserContext } from "../userProvider/UserProvider.jsx";
import Cart from "../cart/Cart.jsx";

const UserFlowSection = () => {
    const {user} = useUserContext();
    if (!user) {
        return null;
    }

    return (
        <>
            <Cart/>
        </>
    );
};

export default UserFlowSection;