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

  const agoraVai = pokemons.map((poke) => (
    <li className="containerPoke">
      <section className="containerPoke-card" key={poke.id}>
        <div className="containerPoke-pokeInfo">
          <span className="containerPoke-pokeName">{poke.name}</span>
          <span className="containerPoke-pokeId">#{poke.id}</span>
        </div>
        <div className="containerPoke-content">
          <div>
            {poke.type.map((tipo) => (
              <div className="containerPoke-type">
                <div key={tipo.type.name} className="containerPoke-typeStyle">
                  <span className="containerPoke-typeName">
                    {tipo.type.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <img
            className="containerPoke-pokeImg"
            src={poke.img.sprites.other["official-artwork"].front_default}
          />
        </div>
      </section>
    </li>
  ));
  /*  const maped = pokemons.map((poke) => (
    <li key={poke.id} className="pokeList-pokeItem">
      <div className="btnContainer">
        <div className="btn__card">
          <div className="header-info">
            <div className="header-position">
              <span className="header-name">{poke.name}</span>
            </div>
            {poke.type.map((tipo) => (
              <div className="header-type">
                <div key={tipo.type.name} className="header-typeText">
                  {tipo.type.name}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="poke-id">{poke.id}</div>

            <img
              className="pokeList-pokeImg"
              src={poke.img.sprites.other["official-artwork"].front_default}
            />
          </div>
        </div>
      </div>
    </li>
  )); */
  return (
    <section className="container">
      {/* <ul className="pokeList">{maped}</ul> */}
      <ul className="render">{agoraVai}</ul>
    </section>
  );
}
