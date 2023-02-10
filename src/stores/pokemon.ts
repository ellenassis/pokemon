import { defineStore } from "pinia";
import axios from "axios";

interface State {
  pokemon?: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
  evolutions: [];
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): State => {
    return { pokemon: undefined, evolutions: [] };
  },
  getters: {
    pokemonAndEvolutions: (state) => {
      if (!state.pokemon) return [];
      return [state.pokemon, ...state.evolutions];
    },
  },
  actions: {
    getPokemon(name: string) {
      const query = name.toLowerCase();
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((response) => {
          this.pokemon = response.data;
        });
    },
  },
});
