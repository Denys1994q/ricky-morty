import "./characters-page.sass";

import SearchPanel from "../components/search-panel/Search-panel";
import LoginPanel from "../components/login-panel/Login-panel";
import CharsPanel from "../components/chars-panel/Chars-panel";

export const CharactersPage = (): JSX.Element => {
    return (
        <section className='characters'>
            <LoginPanel />
            <div className='characters__logo'>
                <img src={require("../imgs/logo.png")} alt='ricky-motry-logo' />
            </div>
            <SearchPanel />
            <CharsPanel />
        </section>
    );
};

export default CharactersPage;
