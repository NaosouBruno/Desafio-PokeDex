import { useEffect, useState } from "react";
import getData from "../../../services/getData";
import "./index.scss";
export default function listPokedex(props) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const pokes = await getData();
      setPokemons(pokes);
    };

    fetch();
  }, []);

  const maped = pokemons.map((poke) => (
    <li key={poke.id}>
      {poke.name}{" "}
      <img
        className="pokeList-pokeImg"
        src={poke.img.sprites.other["official-artwork"].front_default}
      />
    </li>
  ));
  return (
    <section className="container">
      <ul className="pokeList">{maped}</ul>
    </section>
  );
}
