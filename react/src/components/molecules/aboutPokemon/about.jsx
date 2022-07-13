import HeaderPokedex from "../pokedexHeader/header";

import Back from "/assets/img/backBranco.png";
import Love from "/assets/img/love.png";

import "./about.scss";
export default function aboutPokemon() {
  return (
    <section className="about">
      <HeaderPokedex
        leftImg={Back}
        hightImg={Love}
        title={"Bulbasur"}
        classTitle="about-pokeName"
        id={"01"}
        classId={"about-pokeId"}
      />
    </section>
  );
}
