import { useSelector } from "react-redux";

import BurguerContent from "../../molecules/burguerContent/burguerContent";
import BurguerMenu from "../../molecules/burguerButton/burguerMenu";

import CardPokemon from "../../molecules/cardPokemon/cardPokemon";
import PokemonsList from "../../../data/data.json";
export default function listPokedex() {
  const showBurguer = useSelector((state) => state.ui.burguerIsVisible);
  return (
    <section>
      <h1>POKEDEX</h1>
      <CardPokemon dados={PokemonsList} />
      <BurguerMenu />
      {showBurguer && <BurguerContent />}
    </section>
  );
}
