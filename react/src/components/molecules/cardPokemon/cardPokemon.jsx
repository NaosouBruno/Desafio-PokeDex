import { useEffect, useState } from "react";
import getData from "../../../services/getData";

import "./index.scss";

export default function listPokedex(props) {
  const [pokemons, setPokemons] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const [dataHasEnd, setDataHasEnd] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let pokes;
      if (end > 151) {
        pokes = await getData(start, 151);
        setDataHasEnd(true);
      } else {
        pokes = await getData(start, end);
      }

      addObserver();
      /*  setPokemons([...pokemons, ...pokes]); */
      setPokemons((prev) => {
        return prev.concat(pokes);
      });

      console.log(pokes);
      setIsLoading(false);
    };

    fetch();
  }, [start, end]);

  const addObserver = () => {
    /* DECLARA O OBSERVER */
    const observer = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        isLoading === false
      ) {
        setIsLoading(true);
        setStart((currentPageInsideState) => currentPageInsideState + 15);
        setEnd((currentPageInsideState) => currentPageInsideState + 15);
        /* novo fetch */
        console.log("Visivel");
      }
    });
    /* APONTA ONDE ELE TEM QUE OBSERVAR */
    observer.observe(document.querySelector("#observarAqui"));
  };

  const agoraVai = pokemons.map((poke) => (
    <li className="containerPoke" key={poke.data.id}>
      <section className={`containerPoke-card pokeColor--${poke.color}`}>
        <div className="containerPoke-pokeInfo">
          <span className="containerPoke-pokeName">{poke.data.name}</span>
          <span className="containerPoke-pokeId">#{poke.data.id}</span>
        </div>
        <div className="containerPoke-content">
          <div>
            {poke.data.types.map((tipo) => (
              <div className="containerPoke-type" key={tipo.type.name}>
                <div className="containerPoke-typeStyle">
                  <span className="containerPoke-typeName">
                    {tipo.type.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <img
            className="containerPoke-pokeImg"
            src={poke.data.sprites.other["official-artwork"].front_default}
          />
        </div>
      </section>
    </li>
  ));

  return (
    <section className="container">
      <ul className="render">{agoraVai}</ul>
      {!dataHasEnd && <button id="observarAqui">OPA</button>}
    </section>
  );
}
