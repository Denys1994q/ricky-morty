import "./search-panel.sass";

import SearchInput from "../inputs/Search-input";

const SearchPanel = (): JSX.Element => {
    return (
        <div className='searchPanel'>
            <SearchInput />
        </div>
    );
};

export default SearchPanel;
