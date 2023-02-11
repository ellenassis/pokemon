<template>
  <div>
    <main class="main-container">
      <Hero />
      <SearchPokemon />
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
  name: 'Home',
  components: {
    Hero,
    SearchPokemon,
    PokemonList
  },
});
</script>
