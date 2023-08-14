<template>
  <h1 v-if="!pokemon">Loading...</h1>

  <div v-else>
    <h1>Who's That Pokemon??</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonsArr" @selected-pokemon="checkAnswer($event)" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'Pokemon Page',
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ""
    }
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonsArr = await getPokemonsOptions()

      const randomIndexSelectedPokemons = Math.floor(Math.random() * 4)

      this.pokemon = this.pokemonsArr[randomIndexSelectedPokemons]
    },
    checkAnswer(selectedPokemonId) {
      this.showPokemon = true;
      this.showAnswer = true

      if (this.pokemon.id === selectedPokemonId) {
        this.message = `Great!!! It's ${this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)}`
      } else {
        this.message = `Oops!!! This Pokemon is ${this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)}`
      }
    }
  },
  mounted() {
    this.mixPokemonsArray()
  }
}
</script>