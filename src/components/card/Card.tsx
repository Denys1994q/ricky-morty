import "./card.sass";

import { Link } from "react-router-dom";

interface ICardProps {
    name: string,
    species: string,
    image: string,
    id: string
}

const Card = ({ name, species, image, id }: ICardProps): JSX.Element => {
    return (
        <Link to={`/${id}`} className='link-card'>
            <div className='card'>
                <img src={image} className='card__img' alt='character_image' />
                <div className='card__info'>
                    <p className='card__title'>{name}</p>
                    <p className='card__subtitle'>{species}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
