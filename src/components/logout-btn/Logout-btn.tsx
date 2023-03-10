import { GoogleLogout } from "react-google-login";
import { useAppDispatch } from "../../hooks/redux-types";
import { auth_login } from "../../store/slices/auth-slice";

const LogoutBtn = () => {
    const dispatch = useAppDispatch();

    const onSuccess = () => {
        window.localStorage.removeItem("logged-user");
        dispatch(auth_login(null));
    };

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_GOOGLE_KEY as string}
                buttonText={"LogOut"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default LogoutBtn;
