<template>
  <h1>Who's That Pokemon??</h1>

  <PokemonPicture :pokemonId="7" :showPokemon="true" />

  <PokemonOptions :pokemons="pokemonsArr" />
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
      pokemonsArr: []
    }
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonsArr = await getPokemonsOptions()
    }
  },
  mounted() {
    this.mixPokemonsArray()
  }
}
</script>