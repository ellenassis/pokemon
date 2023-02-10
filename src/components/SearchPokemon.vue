<template>
  <div class="search-container">
    <input
      v-on:keyup="onKeyUp"
      v-model="query"
      type="search"
      placeholder="Digite o nome de um pokémon..."
    />
    <button @click="onSearchPokemon"><fa icon="search" /></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

export default defineComponent({
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onSearchPokemon() {
      const pokemonStore = usePokemonStore();
      pokemonStore.getPokemon(this.query);
    },
    onKeyUp(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.onSearchPokemon();
      }
    },
  },
});
</script>
