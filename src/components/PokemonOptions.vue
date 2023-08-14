<template>
  <div class="options-container">

    <button v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selected-pokemon', pokemon.id)"
      :class="!isDisabled ? 'btnOption btn animation isActive' : 'btnOption btn isInactive'" :disabled="isDisabled">{{
        capitalize(pokemon.name) }}
    </button>

  </div>
</template>

<script>
export default {
  name: 'Pokemon Options',
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    isDisabled: false,
  },
  methods: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
  },

}
</script>

<style scoped>
.btnOption {
  position: relative;
  width: 250px;
}

.isActive {
  background: rgb(123, 104, 238);
}

.isInactive {
  background-color: rgb(83, 80, 99);
  color: rgb(128, 126, 143);
  cursor: default;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-right: 1rem;
  margin-top: 5rem;
}
</style>