import "./login-panel.sass";

import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux-types";
import { ILoggedUSer } from "../../store/slices/auth-slice";

import LoginBtn from "../logIn-btn/Login-btn";
import LogoutBtn from "../logout-btn/Logout-btn";

const LoginPanel = () => {
    const logged_user: ILoggedUSer = useAppSelector((state: any) => state.authSlice.logged_user);

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_GOOGLE_KEY,
                scope: " ",
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    return (
        <>
            <div className='loginPanel'>
                {logged_user ? (
                    <>
                        <img className='loginPanel__userPhoto' src={logged_user.imageUrl} alt='user-avatar' />
                        <LogoutBtn />
                    </>
                ) : (
                    <LoginBtn />
                )}
            </div>
        </>
    );
};

export default LoginPanel;
