import "./card.sass";

import { Link } from "react-router-dom";

interface ICardProps {
    name: string;
    species: string;
    image: string;
    id: string;
}

const Card = ({ name, species, image, id }: ICardProps): JSX.Element => {
    return (
        <div className='card'>
            <Link to={`/${id}`}>
                <img src={image} className='card__img' alt='character_image' />
            </Link>
            <div className='card__info'>
                <Link to={`/${id}`} className='card__title'>
                    {name}
                </Link>
                <p className='card__subtitle'>{species}</p>
            </div>
        </div>
    );
};

export default Card;
