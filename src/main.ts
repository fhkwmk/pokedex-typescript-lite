import { CatalogoPokemon } from "./models/catalogo";
import { buscarPokemon } from "./services/pokemonService";

async function executarApp() {
  const catalogo = new CatalogoPokemon();

  console.log("=== 1. BUSCANDO POKÉMONS NA API ===");
  try {
    const pikachu = await buscarPokemon("pikachu");
    const charmander = await buscarPokemon("charmander");
    const bulbasaur = await buscarPokemon(1); // Busca por ID (Bulbasaur)

    console.log("\n=== 2. ADICIONANDO AO CATÁLOGO ===");
    catalogo.adicionar(pikachu);
    catalogo.adicionar(charmander);
    catalogo.adicionar(bulbasaur);

    console.log("\n=== 3. TESTANDO VALIDAÇÃO DE DUPLICADO ===");
    catalogo.adicionar(pikachu); // Deve bloquear

    console.log("\n=== 4. LISTANDO POKÉMONS DO CATÁLOGO ===");
    console.table(catalogo.listar());

    console.log("\n=== 5. USO DE MÉTODOS DE ARRAY (map & find) ===");
    console.log("Nomes em caixa alta (map):", catalogo.obterNomesFormatados());
    
    const buscaLocal = catalogo.buscarPorNome("charmander");
    console.log("Busca local por 'charmander' (find):", buscaLocal);

    console.log("\n=== 6. REMOVENDO UM POKÉMON (filter) ===");
    catalogo.remover(4); // Remove Charmander (ID 4)

    console.log("\n=== 7. LISTA FINAL APÓS REMOÇÃO ===");
    console.table(catalogo.listar());

  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro na aplicação:", error.message);
    }
  }
}

executarApp();