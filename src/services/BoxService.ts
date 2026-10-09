import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { PokemonResumo } from "../models/Pokemon";
import { LocalBoxError } from "../models/CustomErrors";

export class BoxService {
  private filePath = resolve(process.cwd(), "pc_box.json");

  private async lerArquivo(): Promise<PokemonResumo[]> {
    try {
      const conteudo = await readFile(this.filePath, "utf-8");
      return JSON.parse(conteudo) as PokemonResumo[];
    } catch {
      return [];
    }
  }

  private async salvarArquivo(dados: PokemonResumo[]): Promise<void> {
    await writeFile(this.filePath, JSON.stringify(dados, null, 2), "utf-8");
  }

  public async adicionar(pokemon: PokemonResumo): Promise<void> {
    const lista = await this.lerArquivo();
    const jaExiste = lista.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      throw new LocalBoxError(`[AVISO] ${pokemon.nome} já está na Box local.`);
    }

    lista.push(pokemon);
    await this.salvarArquivo(lista);
    console.log(`[OK] ${pokemon.nome} salvo com sucesso no arquivo pc_box.json!`);
  }

  public async listar(): Promise<PokemonResumo[]> {
    return await this.lerArquivo();
  }

  public async remover(id: number): Promise<void> {
    const lista = await this.lerArquivo();
    const existe = lista.some((item) => item.id === id);

    if (!existe) {
      throw new LocalBoxError(`[AVISO] Nenhum Pokémon encontrado com o ID ${id}.`);
    }

    const novaLista = lista.filter((item) => item.id !== id);
    await this.salvarArquivo(novaLista);
    console.log(`[OK] Pokémon ID ${id} removido do pc_box.json.`);
  }
}