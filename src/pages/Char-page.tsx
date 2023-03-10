import "./char-page.sass";

import { useEffect, CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-types";
import { fetchOneCharacter } from "../store/slices/characters-slice";
import { useParams } from "react-router-dom";

import { ScaleLoader } from "react-spinners";
import CharInfo from "../components/char-info/Char-info";
import NavBtn from "../components/nav-btn/Nav-btn";

const CharPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const characterLoading = useAppSelector((state: any) => state.charactersSlice.currentCharacterLoading);
    const characterError = useAppSelector((state: any) => state.charactersSlice.currentCharacterError);

    useEffect(() => {
        dispatch(fetchOneCharacter(id));
    }, []);

    const loaderStyles: CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    };

    const content = (
        <>
            {!characterError ? (
                <>
                    <div className='charPage__btnWrapper'>
                        <NavBtn path={"./"} text='go back' />
                    </div>
                    <CharInfo />
                </>
            ) : (
                <h4>Sorry, something is wrong...</h4>
            )}
        </>
    );

    return (
        <>
            {characterLoading ? (
                <ScaleLoader color={"#26a69a"} cssOverride={loaderStyles} loading={characterLoading} />
            ) : (
                content
            )}
        </>
    );
};

export default CharPage;
