import { GoogleLogin } from "react-google-login";

import { useAppDispatch } from "../../hooks/redux-types";
import { auth_login } from "../../store/slices/auth-slice";

const LoginBtn = () => {
    const dispatch = useAppDispatch();

    const onSuccess = (res: any) => {
        window.localStorage.setItem("logged-user", JSON.stringify(res.profileObj));
        dispatch(auth_login(res.profileObj));
    };

    const onFailure = (res: any) => {
        alert("LOGIN FAILED");
    };

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_GOOGLE_KEY as string}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
};

export default LoginBtn;
