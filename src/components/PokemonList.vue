<template>
  <div class="">
    <div v-for="(pokemon) in pokemonAndEvolutions" :key="pokemon.id">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { mapState } from "pinia";

export default defineComponent({
  methods: {},
  computed: {
	...mapState(usePokemonStore, ['pokemonAndEvolutions']),
  }
});
</script>
