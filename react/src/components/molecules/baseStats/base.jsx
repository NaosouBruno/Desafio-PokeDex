import { useState, useEffect } from "react";
import getPokemon from "../../../services/getPokemon";
import { useParams } from "react-router-dom";
import "./base.scss";
/* import PowerBar from "../../powerBar/powerBar"; */
export default function baseStats() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const pokes = await getPokemon(id);
      setPokemon(pokes[0].data.stats);
      console.log(pokes);
    };
    fetch();
  }, []);

  const maped = pokemon.map((poke) => (
    <div className="base" key={poke.stat.name}>
      <div className="base-container">
        <p className="base-title">{poke.stat.name}</p>
        <span className="base-powerQuant">{poke.base_stat}</span>
        <div className="base-bar">
          <div className="base-powerBar"></div>
        </div>
      </div>
    </div>
  ));

  return <div>{maped}</div>;
}
