import { useAppSelector } from "../../hooks/redux-types";
import { CSSProperties } from "react";

import ScaleLoader from "react-spinners/ScaleLoader";
import Cards from "../../components/cards/Cards";

const CharsPanel = (): JSX.Element => {
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
            {charactersLoading ? (
                <ScaleLoader color={"#26a69a"} cssOverride={loaderStyles} loading={charactersLoading} />
            ) : (
                content
            )}
        </>
    );
};

export default CharsPanel;
