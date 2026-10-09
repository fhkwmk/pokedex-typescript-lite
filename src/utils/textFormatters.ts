import { PokemonResumo} from "../models/Pokemon";

export function formatarPokemonExibicao(pokemon: PokemonResumo): string {
    return `#${pokemon.id} | ${pokemon.nome.toUpperCase()} | Tipos: ${pokemon.tipos.join(", ")} 
    | Altura: ${pokemon.altura} | Peso:${pokemon.peso}`;
}

