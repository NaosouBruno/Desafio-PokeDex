import { useSelector } from "react-redux";

import BurguerContent from "../../molecules/burguerContent/burguerContent";
import BurguerMenu from "../../molecules/burguerButton/burguerMenu";

import CardPokemon from "../../molecules/cardPokemon/cardPokemon";
import HeaderPokedex from "../../molecules/pokedexHeader/header";
export default function listPokedex() {
  const showBurguer = useSelector((state) => state.ui.burguerIsVisible);
  return (
    <section>
      <HeaderPokedex />
      <CardPokemon />
      {showBurguer && <BurguerContent />}
      <BurguerMenu />
    </section>
  );
}
