<template>
  <h1>Who's That Pokemon??</h1>

  <PokemonPicture :pokemonId="7" :showPokemon="true" />

  <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

export default {
  name: 'Pokemon Page',
  components: {
    PokemonPicture,
    PokemonOptions
  }
}
</script>