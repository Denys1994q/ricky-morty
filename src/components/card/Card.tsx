import "./card.sass";

import { Link } from "react-router-dom";

interface CardProps {
    name: string;
    id: string;
    species: string;
    photo: string;
}

const Card = ({ name, species, photo, id }: CardProps): JSX.Element => {
    return (
        <Link to={`/${id}`} className='link-card'>
            <div className='card'>
                <img src={photo} className='card__img' alt='character_image' />
                <div className='card__info'>
                    <p className='card__title'>{name}</p>
                    <p className='card__subtitle'>{species}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
