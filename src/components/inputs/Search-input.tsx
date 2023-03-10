import "./search-input.sass";

import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-types";

import { fetchCharacters } from "../../store/slices/characters-slice";

const SearchInput = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const baseValue = window.localStorage.getItem("search-input-value") || "";

    const [inputValue, setInputValue] = useState<string>(baseValue);

    useEffect(() => {
        window.localStorage.getItem("search-input-value");
    }, []);

    useEffect(() => {
        dispatch(fetchCharacters(inputValue));
        window.localStorage.setItem("search-input-value", inputValue);
    }, [inputValue]);

    return (
        <div className='searchInput'>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type='text'
                autoFocus
                placeholder='Filter by name...'
            />
        </div>
    );
};

export default SearchInput;
