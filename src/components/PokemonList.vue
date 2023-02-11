<template>
  <div class="pokemons-container">
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
      active-class="success"
    >
      <v-slide-group-item v-for="pokemon in pokemons" :key="pokemon.id">
        <v-card class="ma-4 card" width="300">
          <v-card-item>
            <div class="pokemon-card">
              <img :src="pokemon.sprites.front_default" alt="" />
              <h3>{{ pokemon.name }}</h3>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn text class="btn" color="var(--red)" @click="revealStatus">
              Ver status
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-item class="pb-0">
                <h3 class="pokemon-name">{{ pokemon.name }}</h3>
                <div class="pokemon-abitilies">
                  <p v-for="poke in pokemon.abilities" :key="poke.id">
                    {{ poke.ability.name }}
                  </p>
                </div>
                <div class="pokemon-stats">
                  <p v-for="poke in pokemon.stats" :key="poke.id">
                    {{ poke.stat.name }}: <strong>{{ poke.base_stat }}</strong>
                  </p>
                </div>
              </v-card-item>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="var(--red)"
                  class="btn btn-back"
                  @click="reveal = false"
                >
                  Voltar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { mapState } from "pinia";

export default defineComponent({
  data: () => ({
    model: null,
    reveal: false,
  }),
  methods: {
    revealStatus() {
      this.reveal = true;
    },
  },
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
  },
});
</script>
