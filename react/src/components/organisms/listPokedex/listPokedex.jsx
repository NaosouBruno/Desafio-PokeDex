import CardPokemon from "../../molecules/cardPokemon/cardPokemon";
import PokemonsList from "../../../data/data.json";

export default function listPokedex() {
  return (
    <section>
      <h1>POKEDEX</h1>
      <CardPokemon dados={PokemonsList} />
    </section>
  );
}
