import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show the hidden image and pokemon 100", () => {
    let wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll("img");

    expect(img1.exists()).toBeTruthy();

    expect(img2).toBe(undefined);

    expect(img1.classes("hidden-pokemon")).toBeTruthy();

    const src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg";

    expect(img1.attributes("src")).toBe(src);
  });

  test("Should show the pokemon if the showPokemon: true", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const imageShown = wrapper.find("img");

    expect(imageShown.exists()).toBeTruthy();

    expect(imageShown.classes("hidden-pokemon")).toBeFalsy();

    expect(imageShown.classes("fade-in")).toBeTruthy();
  });
});
