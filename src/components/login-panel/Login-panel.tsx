import './login-panel.sass'

import { useAppSelector } from "../../hooks/redux-types";
import { ILoggedUSer } from '../../store/slices/auth-slice';

import LoginBtn from "../logIn-btn/Login-btn";
import LogoutBtn from "../logout-btn/Logout-btn";

const LoginPanel = () => {
    const logged_user: ILoggedUSer = useAppSelector((state: any) => state.authSlice.logged_user);
    return (
        <>
            {logged_user ? (
                <>
                    <div className='loginPanel'>
                        <img className='loginPanel__userPhoto' src={logged_user.imageUrl} alt='user-avatar' />
                        <LogoutBtn />
                    </div>
                </>
            ) : (
                <LoginBtn />
            )}
        </>
    );
};

export default LoginPanel;
