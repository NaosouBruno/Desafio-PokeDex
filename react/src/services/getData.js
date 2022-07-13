async function getData(offset, limit) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const getName = await fetch(`${baseUrl}?offset=${offset}&limit=${limit}`);
  const nameData = await getName.json();

  const pokes = [];

  for (const key in nameData.results) {
    const pokesImg = await fetch(`${baseUrl}${nameData.results[key].name}`);
    const pokesImgData = await pokesImg.json();

    const color = pokesImgData.species.url;

    const colorFetch = await fetch(color);
    const colorData = await colorFetch.json();

    pokes.push({
      data: pokesImgData,
      color: colorData.color.name,
    });
  }

  return pokes;
}

export default getData;
