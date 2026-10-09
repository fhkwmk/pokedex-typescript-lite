# Pokédex TypeScript Lite

Aplicação back-end em Node.js e TypeScript que atua como uma ponte assíncrona para consultar a PokéAPI e gerenciar um catálogo local persistido em arquivo JSON (`pc_box.json`).

## 📋 Sobre o Projeto

O **Pokédex TypeScript Lite** permite buscar informações de Pokémon por nome ou ID, transformar as respostas brutas da API em objetos simplificados e gerenciar uma box local sem duplicidades, oferecendo um menu interativo executado diretamente no terminal.

## 🛠️ Tecnologias Utilizadas

- **Node.js** (Ambiente de execução)
- **TypeScript** (Linguagem fortemente tipada)
- **tsx** (Executor para ambiente de desenvolvimento)
- **PokéAPI** (API REST externa)
- **Git / GitHub** (Versionamento e fluxo GitFlow)

## 📁 Arquitetura do Projeto



## 🚀 Como Instalar e Executar

1. **Clonar o repositório:**

      git clone [https://github.com/fhkwmk/pokedex-typescript-lite.git]

2. **Instalar as dependências:

   npm install
      
3. **Executar a aplicação:

   npm run start
   
🧪 Exemplos de Execução

   Busca Válida e Salvamento Local
   Escolha uma opção: 1
   Digite o nome ou ID do Pokémon: pikachu
   [OK] pikachu salvo com sucesso no arquivo pc_box.json!

   Tentativa de Adicionar Duplicado
   Escolha uma opção: 1
   Digite o nome ou ID do Pokémon: pokemon-inexistente
   [ERRO] Pokémon "pokemon-inexistente" não foi encontrado!

   Listagem da Box Local
   --- Conteúdo do pc_box.json ---
   #25 | PIKACHU | Tipos: electric | Altura: 4 | Peso: 60
   -------------------------------

   Remoção por ID
   Escolha uma opção: 3
   Digite o ID do Pokémon para remover: 25
   [OK] Pokémon ID 25 removido do pc_box.json.

📊 Organização do Projeto
Link do Quadro Kanban: [Clique aqui para visualizar o projeto no GitHub Projects]
https://github.com/users/fhkwmk/projects/2


🎥 Vídeo Demonstrativo




