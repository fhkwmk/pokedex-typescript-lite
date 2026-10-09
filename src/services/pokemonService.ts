import { PokemonApiResponse, PokemonResumo } from "../models/pokemon";

export async function buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo> {
  const identificador = String(nomeOuId).toLowerCase().trim();

  if (!identificador) {
    throw new Error("O nome ou ID do Pokémon não pode ser vazio.");
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identificador}`);

    if (!response.ok) {
      throw new Error(`Pokémon "${nomeOuId}" não foi encontrado!`);
    }

    const data: PokemonApiResponse = await response.json();

    // Mapeia a resposta bruta da API para a nossa interface simplificada
    const pokemonResumo: PokemonResumo = {
      id: data.id,
      nome: data.name,
      tipos: data.types.map((t) => t.type.name),
      altura: data.height,
      peso: data.weight,
    };

    return pokemonResumo;
  } catch (erro: any) {
    // Caso ocorra falha de rede ou o throw acima
    if (erro.message.includes("não foi encontrado")) {
      throw erro;
    }
    throw new Error(`Não foi possível conectar à PokeAPI. (${erro.message})`);
  }
}