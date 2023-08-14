<template>
  <div class="container">
    <h1>Who's That Pokemon??</h1>

    <h1 v-if="!pokemon" class="loading">Loading...</h1>

    <div v-else class="pokedex">
      <button class="btnReset btn animation" @click="reset">Reset</button>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonsArr" @selected-pokemon="checkAnswer($event)" :isDisabled="isDisabled" />
    </div>

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
      message: "",
      isDisabled: false,
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
      this.isDisabled = true

      const capitalized = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)

      if (this.pokemon.id === selectedPokemonId) {
        this.message = `Great!!! It's ${capitalized}`
      } else {
        this.message = `Oops!!! This is ${capitalized}`
      }
    },
    reset() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonsArr = []
      this.pokemon = null
      this.isDisabled = false
      this.mixPokemonsArray()
    }
  },
  mounted() {
    this.mixPokemonsArray()
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'Pokemon';
  src: url('@/assets/fonts/pokemon.woff2') format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1,
h2 {
  font-family: Pokemon;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: normal;
  color: #FFCB05;
  text-shadow: 0 0 10px #3466AF, 0 0 20px #3466AF, 0 0 50px #3466AF,
    0 0 100px #3466AF, 0 0 200px #3466AF;
}

h1 {
  font-size: 3rem;
  margin-bottom: -5rem;
}

h2 {
  position: absolute;
  bottom: 0;
  font-size: 3rem;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading {
  position: absolute;
  top: 50%;
}

.pokedex {
  background-image: url('@/assets/images/pokedex.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 425px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5.5rem;
  position: relative;
}

.btnReset {
  position: absolute;
  top: 10rem;
  right: 5rem;
  width: 100px;
  height: 35px;
  background: rgb(123, 104, 238);
}
</style>