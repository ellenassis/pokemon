<template>
  <div>
    <main class="main-container">
      <Hero />
      <SearchPokemon />
      <PokemonList />
    </main>
  </div>
</template>

<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import SearchPokemon from "@/components/SearchPokemon.vue";
import PokemonList from "@/components/PokemonList.vue";
</script>
