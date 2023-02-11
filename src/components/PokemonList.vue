<template>
  <div class="pokemons-container">
    <v-slide-group
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
            <v-btn text class="btn" color="var(--red)" @click="expandInfo(pokemon.id)">
              Ver status
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="isExpanded(pokemon.id)"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-item class="pb-0">
                <h3 class="pokemon-name">{{ pokemon.name }}</h3>
                <div class="pokemon-abitilies">
                  <p v-for="poke in pokemon.abilities" :key="poke.ability.id">
                    {{ poke.ability.name }}
                  </p>
                </div>
                <div class="pokemon-stats">
                  <p v-for="poke in pokemon.stats" :key="poke.stat.id">
                    {{ poke.stat.name }}: <strong>{{ poke.base_stat }}</strong>
                  </p>
                </div>
              </v-card-item>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="var(--red)"
                  class="btn btn-back"
                  @click="collapseInfo(pokemon.id)"
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

interface Data {
  selected: number[]
}

export default defineComponent({
  data: (): Data => ({
    selected: [],
  }),
  methods: {
    expandInfo(id: number) {
      this.selected.push(id);
    },
    collapseInfo(id: number) {
      const index = this.selected.indexOf(id);
      this.selected.splice(index, 1);
    },
    isExpanded(id: number): boolean {
      return this.selected.includes(id);
    }
  },
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
  },
});
</script>
