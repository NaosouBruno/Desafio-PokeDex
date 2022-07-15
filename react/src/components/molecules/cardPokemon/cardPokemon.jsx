import { useEffect, useState } from "react";
import getData from "../../../services/getData";
import { Link } from "react-router-dom";
import "./index.scss";

export default function listPokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const [dataHasEnd, setDataHasEnd] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let pokes;
      if (end === 165) {
        pokes = await getData(start, end);
        setDataHasEnd(true);
      } else {
        pokes = await getData(start, end);
      }

      addObserver();

      setPokemons((prev) => {
        if (end === 165) {
          return prev.concat(pokes.slice(0, 1));
        } else {
          return prev.concat(pokes);
        }
      });

      console.log(pokes);
      console.log(start);
      console.log(end);
      setIsLoading(false);
    };

    fetch();
  }, [start, end]);

  /*  const getId = (event) => {
    const id = event;
    console.log(id);
  }; */
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

  const maped = pokemons.map((poke) => (
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
          <Link to={`/about/${poke.data.id}`}>
            <img
              className="containerPoke-pokeImg"
              src={poke.data.sprites.other["official-artwork"].front_default}
            />
          </Link>
        </div>
      </section>
    </li>
  ));

  return (
    <section className="container">
      <ul className="render">{maped}</ul>
      {!dataHasEnd && <button id="observarAqui">OPA</button>}
    </section>
  );
}
