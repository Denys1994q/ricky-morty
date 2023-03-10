import "./app.sass";

import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/Home-page";
import CharPage from "../../pages/Char-page";

function App() {
    return (
        <div className='mainContainer'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:id' element={<CharPage />} />
            </Routes>
        </div>
    );
}

export default App;
