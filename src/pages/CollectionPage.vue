<template>
  <div class="q-pa-md q-ma-md row items-start q-gutter-md">
    <q-card
      class="q-pa-md"
      v-for="(pokemon, index) in savedPokemon"
      :key="pokemon.name"
      style="width: 300px"
    >
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <h3>
        {{ pokemon.name }}
        <q-btn @click="removePokemon(index)" color="red"
          ><q-icon name="delete" round></q-icon
        ></q-btn>
      </h3>
      <p>
        <a
          :href="`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`"
          style="text-decoration: none; color: black"
          ><q-icon name="article" color="blue"></q-icon>JSON</a
        >
      </p>
    </q-card>
  </div>
</template>

<script>
import { usePokemonStore } from "stores/pokemon";

export default {
  setup() {
    const pokemonStore = usePokemonStore();
    const savedPokemon = pokemonStore.savedPokemon;
    const removePokemon = pokemonStore.removePokemon;

    return {
      savedPokemon,
      removePokemon,
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
/* Style = Quasar + Reg. CSS*/
</style>
