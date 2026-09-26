import { buscarPokemon } from "./services/pokemonService";

async function executarTeste() {
  try {
    console.log("Buscando Pikachu...");
    const pikachu = await buscarPokemon("pikachu");
    console.log("Resultado:", pikachu);

    console.log("\nTestando busca por Pokémon inexistente...");
    await buscarPokemon("pokemon_que_nao_existe_12345");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro capturado:", error.message);
    }
  }
}

executarTeste();