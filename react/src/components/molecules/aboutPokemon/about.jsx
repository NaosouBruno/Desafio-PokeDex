import HeaderPokedex from "../pokedexHeader/header";

import Back from "/assets/img/back.png";
import Love from "/assets/img/love.png";

import "./about.scss";
export default function aboutPokemon() {
  return (
    <div className="about">
      <HeaderPokedex leftImg={Back} hightImg={Love} title={"Bulbasur"} />
      <h1>About</h1>
    </div>
  );
}
