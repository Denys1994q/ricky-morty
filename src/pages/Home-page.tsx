import "./home-page.sass";
import ScaleLoader from "react-spinners/ScaleLoader";

import { gapi } from "gapi-script";
import { CSSProperties, useEffect } from "react";
import { useAppSelector } from "../hooks/redux-types";

import SearchPanel from "../components/search-panel/Search-panel";
import Cards from "../components/cards/Cards";
import LoginPanel from "../components/login-panel/Login-panel";

export const HomePage = (): JSX.Element => {
    const charactersLoading = useAppSelector((state: any) => state.charactersSlice.charactersLoading);
    const charactersError = useAppSelector((state: any) => state.charactersSlice.charactersError);

    const loaderStyles: CSSProperties = {
        display: "block",
        textAlign: "center",
    };

    useEffect(() => {
        function start() {
            gapi.auth2.init({
                clientId: process.env.REACT_APP_CLIENT_GOOGLE_KEY,
                scope: " ",
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    const content = (
        <>
            {!charactersError ? (
                <>
                    <Cards />
                </>
            ) : (
                <h4>Nothing found...</h4>
            )}
        </>
    );

    return (
        <>
            <LoginPanel />
            <div className='homePage_img'>
                <img src={require("../imgs/logo.png")} alt='ricky-motry-logo' />
            </div>
            <SearchPanel />
            {charactersLoading ? (
                <ScaleLoader color={"#26a69a"} cssOverride={loaderStyles} loading={charactersLoading} />
            ) : (
                content
            )}
        </>
    );
};

export default HomePage;
