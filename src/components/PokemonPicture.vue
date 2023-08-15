<template>
  <div class="pokemon-container">
    <img :src="imgSrc" v-if="!showPokemon" alt="pokemon" class="hidden-pokemon">
    <img :src="imgSrc" v-else alt="pokemon" class="fade-in">
  </div>
</template>

<script>
export default {
  name: 'Pokemon Picture',
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}

img {
  height: 100px;
  position: absolute;
  width: 100vw;
  margin-left: -51vw;
  margin-top: 4.5rem;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>