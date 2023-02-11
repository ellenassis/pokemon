<template>
  <div class="search-container">
    <input
      v-on:keyup="onKeyUp"
      v-model="query"
      type="search"
      placeholder="Digite o nome de um pokémon..."
    />
    <button @click="onSearchPokemon">
      <v-icon icon="fa:fas fa-search"></v-icon>
    </button>
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
    async onSearchPokemon() {
      const pokemonStore = usePokemonStore();
      await pokemonStore.getPokemons(this.query);
      pokemonStore.pokemons = [];
    },
    onKeyUp(event: KeyboardEvent) {
      if (event.key === "Enter") {
        this.onSearchPokemon();
      }
    },
  },
});
</script>
