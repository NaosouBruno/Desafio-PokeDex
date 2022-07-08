async function getData() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const getName = await fetch(baseUrl);
  const nameData = await getName.json();

  const pokes = [];

  for (const key in nameData.results) {
    const pokesImg = await fetch(`${baseUrl}${nameData.results[key].name}`);
    const pokesImgData = await pokesImg.json();

    pokes.push({
      id: key,
      name: nameData.results[key].name,
      img: pokesImgData,
    });
  }

  return pokes;
}

export default getData;
