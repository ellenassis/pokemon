<template>
  <div>
    <main class="main-container">
      <Hero />
      <SearchPokemon @onError="onSearchError" @onSuccess="onSearchSuccess" />
      <div v-if="searchError"> 
        <p class="errorMsg">Pokémon não encontrado.</p>
      </div>
      <PokemonList />
    </main>
  </div>
</template>

<script lang="ts">
import Hero from "@/components/Hero.vue";
import SearchPokemon from "@/components/SearchPokemon.vue";
import PokemonList from "@/components/PokemonList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Hero,
    SearchPokemon,
    PokemonList,
  },
  data() {
    return {
      searchError: false
    }
  },
  methods: {
    onSearchError() {
      this.searchError = true;
    },
    onSearchSuccess() {
      this.searchError = false;
    }
  }
});
</script>
