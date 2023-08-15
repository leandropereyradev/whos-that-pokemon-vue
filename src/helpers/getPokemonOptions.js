import pokemonAPI from "@/api/pokemonAPI";

export const createPokemonsArray = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((arg, index) => index + 1);
};

export const getPokemonsNames = async ([a, b, c, d] = []) => {
  const promisesArr = [
    pokemonAPI.get(`/${a}`),
    pokemonAPI.get(`/${b}`),
    pokemonAPI.get(`/${c}`),
    pokemonAPI.get(`/${d}`),
  ];

  const [p1, p2, p3, p4] = await Promise.all(promisesArr);

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

const getPokemonsOptions = async () => {
  const mixtedPokemons = createPokemonsArray().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonsNames(mixtedPokemons.splice(0, 4));

  return pokemons;
};

export default getPokemonsOptions;
