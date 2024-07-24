import Button from "../button/Button.jsx";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import styles from "./styles.module.css";

const Auth = () => {
    const {user, setUser} = useUserContext();

    return (
        <div>
            {!user &&
                <Button onClick={() => {
                    setUser('Some User');
                }}>
                    Login
                </Button>
            }
            {user &&
                <div className={styles.authBlock}>
                    <div>
                        {user}
                    </div>
                    <Button onClick={() => {
                        setUser('');
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