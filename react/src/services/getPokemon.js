async function getPokemon(id) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const poke = await fetch(`${baseUrl}${id}`);

  const pokeData = await poke.json();

  const pokeEggGroup = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const eggGroupData = await pokeEggGroup.json();
  const pokes = [];
  pokes.push({
    data: pokeData,
    eggGroup: eggGroupData.egg_groups[0],
  });
  console.log(pokes);
  return pokes;
}

export default getPokemon;
