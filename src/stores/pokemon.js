import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    savedPokemon: [],
  }),
  actions: {
    addPokemon(pokemon) {
      this.savedPokemon.push(pokemon);
    },
    removePokemon(index) {
      this.savedPokemon.splice(index, 1);
    },
  },
});
