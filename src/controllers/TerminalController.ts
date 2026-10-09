import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { buscarPokemon } from "../services/pokemonService";
import { BoxService } from "../services/BoxService";
import { formatarPokemonExibicao } from "../utils/textFormatters";

export class TerminalController {
  private boxService = new BoxService();

  public async iniciarMenu(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    let rodando = true;

    while (rodando) {
      console.log("\n=================================");
      console.log("   POKÉDEX TYPESCRIPT LITE");
      console.log("=================================");
      console.log("1. Buscar na PokeAPI e Salvar");
      console.log("2. Listar Pokémons da Box Local");
      console.log("3. Remover Pokémon por ID");
      console.log("0. Sair");
      
      const opcao = await rl.question("\nEscolha uma opção: ");

      switch (opcao.trim()) {
        case "1": {
          const termo = await rl.question("Digite o nome ou ID do Pokémon: ");
          try {
            const pokemon = await buscarPokemon(termo);
            if (pokemon) {
              await this.boxService.adicionar(pokemon);
            }
          } catch (erro: any) {
            console.log(`[ERRO] ${erro.message}`);
          }
          break;
        }
        case "2": {
          const lista = await this.boxService.listar();
          if (lista.length === 0) {
            console.log("[AVISO] A Box local está vazia.");
          } else {
            console.log("\n--- Conteúdo do pc_box.json ---");
            lista.forEach((p) => console.log(formatarPokemonExibicao(p)));
            console.log("-------------------------------");
          }
          break;
        }
        case "3": {
          const idStr = await rl.question("Digite o ID do Pokémon para remover: ");
          const id = Number(idStr);
          if (isNaN(id)) {
            console.log("[ERRO] ID inválido.");
          } else {
            try {
              await this.boxService.remover(id);
            } catch (erro: any) {
              console.log(`[ERRO] ${erro.message}`);
            }
          }
          break;
        }
        case "0": {
          console.log("Saindo da Pokédex... Até mais!");
          rodando = false;
          break;
        }
        default:
          console.log("[ERRO] Opção inválida!");
      }
    }

    rl.close();
  }
}