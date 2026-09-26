// Interface para o modelo simplificado que usaremos no nosso catálogo
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

// Interface para mapear exatamente o formato do JSON retornado pela PokeAPI
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}