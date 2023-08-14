<template>
  <div class="options-container">

    <button class="btn" v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selected-pokemon', pokemon.id)">{{
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
      required: true
    }
  },
  methods: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  width: 250px;
  letter-spacing: 2px;
}

button.btn {
  font-weight: 600;
  color: aliceblue;
  text-transform: uppercase;
  padding: 0.25em 1.5em;
  background: rgb(123, 104, 238);
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.btn::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(65, 105, 225);
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 rgb(176, 224, 230);
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.btn:hover {
  background: #ffe9e9;
  transform: translate(0, 0.25em);
  color: rgb(123, 104, 238);
}

button.btn:hover::before {
  box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 rgb(176, 224, 230);
  transform: translate3d(0, 0.5em, -1em);
}

button.btn:active {
  background: #ffe9e9;
  transform: translate(0em, 0.75em);
}

button.btn:active::before {
  box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
  transform: translate3d(0, 0, -1em);
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-right: 1rem;
  margin-top: 5rem;
}
</style>