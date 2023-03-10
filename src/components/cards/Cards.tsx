import "./cards.sass";

import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../hooks/redux-types";
import { ICharObj } from "../../store/slices/characters-slice";

import Card from "../card/Card";

const Cards = (): JSX.Element => {
    const characters: ICharObj[] = useAppSelector((state: any) => state.charactersSlice.characters);

    const content =
        characters &&
        characters.length > 0 &&
        characters.map((item: any) => {
            return <Card key={uuidv4()} id={item.id} name={item.name} species={item.species} image={item.image} />;
        });

    return <ul className='cardsBox'>{content}</ul>;
};

export default Cards;
