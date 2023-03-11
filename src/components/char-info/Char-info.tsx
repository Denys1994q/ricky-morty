import "./char-info.sass";
import { useAppSelector } from "../../hooks/redux-types";

const CharInfo = () => {
    const character = useAppSelector((state: any) => state.charactersSlice.currentCharacter);

    return (
        <>
            {character && (
                <div className='char'>
                    <div className='char__photo'>
                        <img src={character.image} alt='char-photo' />
                    </div>
                    <p className='char__title'>{character.name}</p>
                    <div className='infoBlock'>
                        <p className='infoBlock__name'>Informations</p>
                        <ul>
                            <li className='infoBlock__item'>
                                <p className='infoBlock__itemTitle'>Gender</p>
                                <p className='infoBlock__itemText'>{character.gender}</p>
                            </li>
                            <li className='infoBlock__item'>
                                <p className='infoBlock__itemTitle'>Status</p>
                                <p className='infoBlock__itemText'>{character.status}</p>
                            </li>
                            <li className='infoBlock__item'>
                                <p className='infoBlock__itemTitle'>Specie</p>
                                <p className='infoBlock__itemText'>{character.species}</p>
                            </li>
                            <li className='infoBlock__item'>
                                <p className='infoBlock__itemTitle'>Origin</p>
                                <p className='infoBlock__itemText'>{character.origin.name}</p>
                            </li>
                            <li className='infoBlock__item'>
                                <p className='infoBlock__itemTitle'>Type</p>
                                <p className='infoBlock__itemText'>{character.type ? character.type : "Unknown"}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default CharInfo;
