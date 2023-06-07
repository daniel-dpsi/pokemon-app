<template>
  <div class="random-pokemon-generator">
    <div class="generate-button">
      <q-btn
        @click="generateRandomPokemon"
        color="green"
        class="generate-button__btn"
        >GENERATE</q-btn
      >

      <q-btn
        @click="saveCurrentPokemon"
        color="primary"
        :disable="!randomPokemon"
        class="generate-button__btn"
        >KEEP</q-btn
      >
    </div>
    <br /><br />

    <div v-if="randomPokemon" class="pokemon-details">
      <q-card class="pokemon-card">
        <q-img
          :src="randomPokemon.sprites.front_default"
          :alt="randomPokemon.name"
          class="pokemon-card__image"
        ></q-img>
        <q-card-section class="pokemon-card__stats">
          <h5>{{ randomPokemon.name }}</h5>
          <ul class="q-pl-xs">
            <q-icon name="favorite" color="green"></q-icon>
            <span class="stat-label">HP:</span>
            {{
              getPokemonStat(randomPokemon, "hp")
            }}
            <br />
            <q-icon name="whatshot" color="red"></q-icon>
            <span class="stat-label">Attack:</span>
            {{
              getPokemonStat(randomPokemon, "attack")
            }}
            <br />
            <q-icon name="shield" color="blue"></q-icon>
            <span class="stat-label">Defense:</span>
            {{
              getPokemonStat(randomPokemon, "defense")
            }}
            <br />
            <q-icon name="fast_forward" color="purple"></q-icon>
            <span class="stat-label">Speed:</span>
            {{
              getPokemonStat(randomPokemon, "speed")
            }}
            <br />
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { usePokemonStore } from "stores/pokemon.js";
import axios from "axios";

export default {
  data() {
    return {
      randomPokemon: null,
    };
  },
  methods: {
    generateRandomPokemon() {
      const randomId = Math.floor(Math.random() * 898) + 1; // Generate a random ID between 1 and 898 (total number of Pokémon)
      const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

      axios
        .get(url)
        .then((response) => {
          this.randomPokemon = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveCurrentPokemon() {
      if (this.randomPokemon) {
        const pokemonStore = usePokemonStore();
        pokemonStore.addPokemon(this.randomPokemon);
      }
    },
    getPokemonStat(pokemon, statName) {
      const stat = pokemon.stats.find((stat) => stat.stat.name === statName);
      return stat ? stat.base_stat : "-";
    },
  },
};
</script>

<style scoped>
/* Style = Sass + Quasar*/
.random-pokemon-generator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.generate-button {
  display: flex;
  gap: 10px;
}

.pokemon-card {
  width: 300px;
}

.pokemon-card__image {
  max-height: 200px;
  object-fit: contain;
}

.pokemon-card__stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.stat-label {
  font-weight: bold;
}
</style>
