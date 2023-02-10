<template>
  <div class="search-container">
    <input v-model="query" type="search" placeholder="Digite o nome do pokémon desejado..." />
    <button @click="searchPokemon"><fa icon="search" /></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemonStore } from "@/stores/pokemon";

export default defineComponent ({
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchPokemon() {
      const pokemonStore = usePokemonStore();
      pokemonStore.getPokemon(this.query);
    },
  },
});
</script>
