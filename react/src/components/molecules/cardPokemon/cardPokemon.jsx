import { useEffect, useState } from "react";
import getData from "../../../services/getData";
import "./index.scss";

export default function listPokedex(props) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const pokes = await getData();
      console.log(pokes);
      setPokemons(pokes);
    };

    fetch();
  }, []);

  const maped = pokemons.map((poke) => (
    <li key={poke.id} className="pokeList-pokeItem">
      <div className="btnContainer">
        <div className="btn__card">
          <div>{poke.type["move-damage-class"]}</div>

          {poke.name}
          <img
            className="pokeList-pokeImg"
            src={poke.img.sprites.other["official-artwork"].front_default}
          />
        </div>
      </div>
    </li>
  ));
  return (
    <section className="container">
      <ul className="pokeList">{maped}</ul>
    </section>
  );
}
