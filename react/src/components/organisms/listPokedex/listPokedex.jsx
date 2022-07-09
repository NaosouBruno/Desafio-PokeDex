import { useSelector } from "react-redux";

import BurguerContent from "../../molecules/burguerContent/burguerContent";
import BurguerMenu from "../../molecules/burguerButton/burguerMenu";

import CardPokemon from "../../molecules/cardPokemon/cardPokemon";
import HeaderPokedex from "../../molecules/pokedexHeader/header";

import Back from "/assets/img/back.png";
import ListIcon from "/assets/img/list.png";

export default function listPokedex() {
  const showBurguer = useSelector((state) => state.ui.burguerIsVisible);
  return (
    <section>
      <HeaderPokedex leftImg={Back} hightImg={ListIcon} title={"Pokedex"} />
      <CardPokemon />
      {showBurguer && <BurguerContent />}
      <BurguerMenu />
    </section>
  );
}
