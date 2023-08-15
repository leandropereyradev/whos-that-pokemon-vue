import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
  });

  test("Should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should display all four options correctly", () => {
    const buttonTags = wrapper.findAll("button");

    expect(buttonTags.length).toBe(4);

    expect(buttonTags[0].text()).toBe("Bulbasaur");

    expect(buttonTags[1].text()).toBe("Ivysaur");

    expect(buttonTags[2].text()).toBe("Venusaur");

    expect(buttonTags[3].text()).toBe("Charmander");
  });

  test('Should output "selected-pokemon" with its parameters on click', () => {
    const buttonTags = wrapper.findAll("button");

    buttonTags[0].trigger("click");
    buttonTags[1].trigger("click");
    buttonTags[2].trigger("click");
    buttonTags[3].trigger("click");

    expect(wrapper.emitted("selected-pokemon").length).toBe(4);

    expect(wrapper.emitted("selected-pokemon")[0]).toEqual([1]);

    expect(wrapper.emitted("selected-pokemon")[1]).toEqual([2]);

    expect(wrapper.emitted("selected-pokemon")[2]).toEqual([3]);

    expect(wrapper.emitted("selected-pokemon")[3]).toEqual([4]);
  });
});
