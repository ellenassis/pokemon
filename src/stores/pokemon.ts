import { defineStore } from "pinia";
import axios from "axios";

interface Chain { 
  evolves_to: Chain[], 
  species: { url: string } 
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    stat: {
      name: string;
      id: number;
    },
    base_stat: number;
  }>;
  abilities: Array<{
    ability: {
      name: string;
      id: number
    }
  }>;
}

interface State {
  pokemons: Array<Pokemon>;
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): State => {
    return { pokemons: [] };
  },
  actions: {
    async getPokemons(specieName: string) {
      const query = specieName.toLowerCase();
      const { data: species } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${query}`
      )
      const { data: evolution } = await axios.get(species.evolution_chain.url);

      this.getPokemonsByChains([evolution.chain]);
    },
    async getPokemonsByChains(chains: Chain[]) {
      if (chains.length === 0) return;

      for (const chain of chains) {
        const { evolves_to: evolvesTo, species } = chain;

        const { data: specie } = await axios.get(species.url);

        const { data: pokemon } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${specie.name}`
        );
        this.pokemons.push(pokemon);

        if (evolvesTo.length !== 0) {
          this.getPokemonsByChains(evolvesTo);
        }
      }
    },
  },
});
