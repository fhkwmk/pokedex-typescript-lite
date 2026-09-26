import { PokemonResumo } from "./pokemon";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  // Método para adicionar Pokémon garantindo que não haja duplicados (por ID)
  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((p) => p.id === pokemon.id);

    if (jaExiste) {
      console.log(`⚠️ O Pokémon "${pokemon.nome}" (ID: ${pokemon.id}) já está no catálogo!`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`✅ "${pokemon.nome}" adicionado com sucesso ao catálogo.`);
  }

  // Método para listar todos os Pokémon cadastrados
  listar(): PokemonResumo[] {
    return this.pokemons;
  }

  // Método para remover um Pokémon pelo ID
  remover(id: number): boolean {
    const tamanhoInicial = this.pokemons.length;
    this.pokemons = this.pokemons.filter((p) => p.id !== id);

    const foiRemovido = this.pokemons.length < tamanhoInicial;
    if (foiRemovido) {
      console.log(`🗑️ Pokémon com ID ${id} removido do catálogo.`);
    } else {
      console.log(`❌ Nenhum Pokémon encontrado com o ID ${id} para remoção.`);
    }

    return foiRemovido;
  }

  // Método utilitário para buscar localmente no catálogo por nome (usando find)
  buscarPorNome(nome: string): PokemonResumo | undefined {
    return this.pokemons.find(
      (p) => p.nome.toLowerCase() === nome.toLowerCase()
    );
  }

  // Retorna uma lista apenas com os nomes formatados em caixa alta (usando map)
  obterNomesFormatados(): string[] {
    return this.pokemons.map((p) => p.nome.toUpperCase());
  }
}