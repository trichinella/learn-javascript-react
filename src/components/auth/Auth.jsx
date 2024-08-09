import Button from "../button/Button.jsx";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import styles from "./styles.module.css";

const defaultUser = {
    id: "a304959a-76c0-4b34-954a-b38dbf310360",
    name: "Antony",
}

const Auth = () => {
    const {user, setUser} = useUserContext();

    return (
        <div>
            {!user &&
                <Button onClick={() => {
                    setUser(defaultUser);
                }}>
                    Login
                </Button>
            }
            {user &&
                <div className={styles.authBlock}>
                    <div>
                        {user.name}
                    </div>
                    <Button onClick={() => {
                        setUser(null);
                    }}>
                        Logout
                    </Button>
                </div>
            }
        </div>
    );
};

Auth.propTypes = {};

export default Auth;