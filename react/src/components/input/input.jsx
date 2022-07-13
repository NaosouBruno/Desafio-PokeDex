import './input.scss';

export default function search() {
    return (
        <div className='pokeSearch'>
            <div className="pokeSearch__container">
                <input className="pokeSearch__input" type="text" name="nome" placeholder='Search Pokemon, Move, Ability etc'></input>
                <img className="pokeSearch__searchIcon" src="src/assets/img/search.png" alt="search icon" />
            </div>
        </div>
    )
}