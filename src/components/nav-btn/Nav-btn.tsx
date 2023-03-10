import "./nav-btn.sass";

import { Link } from "react-router-dom";

import { NavBtnProps } from "./nav-btn.props";

const NavBtn = ({ path, text }: NavBtnProps): JSX.Element => {
    return (
        <Link to={`/${path}`} className='btnRoute btnRoute-arrowBefore'>
            {text}
        </Link>
    );
};

export default NavBtn;
