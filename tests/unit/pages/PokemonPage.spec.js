import { shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonPage component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("Should call the mixPokemonsArray when mounting", () => {
    const mixPokemonsArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonsArray"
    );

    shallowMount(PokemonPage);

    expect(mixPokemonsArraySpy).toHaveBeenCalled();
  });

  test("Should match this snapshot when it loads the Pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          isDisabled: false,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show the PokemonPicture and PokemonOptions components", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          isDisabled: false,
        };
      },
    });

    const pictureTag = wrapper.find("pokemon-picture-stub");
    const optionsTag = wrapper.find("pokemon-options-stub");

    expect(pictureTag.exists()).toBeTruthy();
    expect(optionsTag.exists()).toBeTruthy();

    expect(pictureTag.attributes("pokemonid")).toBe("1");
    expect(optionsTag.attributes("pokemons")).toBeTruthy();
  });

  test("The checkAnswer() function should be executed", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          isDisabled: false,
        };
      },
    });

    const pokemonName =
      mockPokemons[0].name.charAt(0).toUpperCase() +
      mockPokemons[0].name.slice(1);

    await wrapper.vm.checkAnswer(1);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(`Great!!! It's ${pokemonName}`);

    await wrapper.vm.checkAnswer(2);
    expect(wrapper.vm.message).toBe(`Oops!!! This is ${pokemonName}`);
  });
});
