import getPokemonsOptions, {
  createPokemonsArray,
  getPokemonsNames,
} from "@/helpers/getPokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("getPokemonOptions Helpers", () => {
  test("Should return an array of numbers from createPokemonsArray()", () => {
    const pokemons = createPokemonsArray();

    expect(pokemons.length).toBe(650);

    expect(pokemons[0]).toBe(1);

    expect(pokemons[500]).toBe(501);

    expect(pokemons[649]).toBe(650);
  });

  test("Should return a four element array of Pokemon names from getPokemonsNames()", async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4]);

    expect(pokemons).toStrictEqual(mockPokemons);

    expect(typeof pokemons[0].name).toBe("string");

    expect(typeof pokemons[0].id).toBe("number");
  });

  test("Should return a mixed array from getPokemonsOptions()", async () => {
    const pokemons = await getPokemonsOptions();

    expect(pokemons.length).toBe(4);

    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
