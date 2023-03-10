import "./home-page.sass";
import ScaleLoader from "react-spinners/ScaleLoader";

import { CSSProperties } from "react";

import SearchPanel from "../components/search-panel/Search-panel";
import Cards from "../components/cards/Cards";
import { useAppSelector } from "../hooks/redux-types";

export const HomePage = (): JSX.Element => {
    const charactersLoading = useAppSelector((state: any) => state.charactersSlice.charactersLoading);
    const charactersError = useAppSelector((state: any) => state.charactersSlice.charactersError);

    const loaderStyles: CSSProperties = {
        display: "block",
        textAlign: "center",
    };

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
