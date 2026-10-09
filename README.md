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
```text
pokedex-typescript-lite/
├── node_modules/         # Dependências do projeto (geradas pelo npm)
├── src/                  # Código-fonte principal da aplicação
│   ├── controllers/      # Gerenciamento de fluxo e controle do Terminal
│   │   └── TerminalController.ts
│   ├── models/           # Definição de classes e tipos de dados (Modelos)
│   │   ├── Catalogo.ts
│   │   ├── CustomErrors.ts
│   │   └── Pokemon.ts
│   ├── services/         # Regras de negócio e integração com a PokéAPI
│   │   ├── BoxService.ts
│   │   └── PokemonService.ts
│   ├── utils/            # Funções utilitárias e auxiliares
│   ├── .gitignore        # Arquivos ignorados pelo Git dentro do src
│   └── main.ts           # Ponto de entrada (Entrypoint) da aplicação
├── .gitignore            # Arquivos ignorados pelo Git na raiz
├── Mini Projeto Back-End.pdf # Documento de requisitos / especificação
├── package-lock.json     # Histórico detalhado das dependências instaladas
├── package.json          # Configurações do projeto e scripts npm
├── pc_box.json           # Banco de dados local para persistência de Pokémons
├── README.md             # Documentação do projeto
└── tsconfig.json         # Configurações do compilador TypeScript
```

### 🧱 Divisão de Responsabilidades

* **`controllers/`**: Concentra a lógica que gerencia as interações do menu interativo no terminal.
* **`models/`**: Define as estruturas de objetos (classes e interfaces) como o catálogo e os dados mapeados do Pokémon.
* **`services/`**: Camada isolada para comunicação com a PokéAPI externa e manipulação do armazenamento local.
* **`pc_box.json`**: Arquivo utilizado como banco de dados NoSQL simples para persistir os Pokémons capturados.
* **`main.ts`**: Inicializa a aplicação e chama o controlador principal do terminal.



## 🚀 Como Instalar e Executar

1. **Clonar o repositório:**

   git clone https://github.com/fhkwmk/pokedex-typescript-lite.git

2. **Instalar as dependências:

   npm install
      
3. **Executar a aplicação:

   npm run start
   

📊 Organização do Projeto
Link do Quadro Kanban: [Clique aqui para visualizar o projeto no GitHub Projects]
https://github.com/users/fhkwmk/projects/2


🎥 Vídeo Demonstrativo

https://drive.google.com/file/d/1lq24UMsj6TrdkPIhmAyEl_e7rzBW03M7/view?usp=sharing





