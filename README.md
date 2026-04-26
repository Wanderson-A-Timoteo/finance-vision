<h1 align="center">
  <img src="public/logo-grafico.png" alt="Logo Finance Vision" width="60" />
  <br>
  Finance Vision App
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar-aplicação">Executar Aplicação</a>
</p>

<br>

## 💻 Projeto

Bem-vindo ao repositório do **Finance Vision**, uma aplicação web front-end desenvolvida em **React.js**. Este projeto simula uma plataforma moderna e inteligente para gestão financeira e controle de gastos, combinando um design sofisticado com uma arquitetura de código modular e escalável. 📈

> Projeto focado na construção de Single Page Applications (SPA), navegação sem recarregamento (Client-Side Routing) e otimização de performance e ciclo de vida de componentes.

🔗 **Demo Online:** [finance-vision.github.io](https://wanderson-a-timoteo.github.io/finance-vision/)

<br>

## 🚀 Funcionalidades

- **Single Page Application (SPA):** Navegação fluida e instantânea entre as páginas (Dashboard, Transações, Relatórios, Metas e Suporte) utilizando o React Router DOM.
- **Dashboard Imersivo (Home):** Visão geral da saúde financeira do usuário, com sistema de grid avançado para exibição de cards de resumo (receitas, despesas e saldo) e gráficos de acompanhamento.
- **Listagem de Transações Dinâmica:** Tabela de lançamentos gerada dinamicamente através de dados simulados (Mock Data) e componentes reutilizáveis. O sistema inclui formatação automática de valores monetários e datas utilizando JavaScript.
- **Formulário de Suporte Controlado:** Interface de contato funcional utilizando o Hook `useState` para capturar as dúvidas do usuário e gerenciar mensagens de feedback (sucesso) na tela.
- **Otimização de Performance:** Implementação do Hook `useEffect` para gerenciar a limpeza (Cleanup) de "espiões" de eventos do navegador (Event Listeners), garantindo que menus e animações baseadas em scroll funcionem sem causar vazamento de memória.
- **Design Responsivo e Moderno:** Interface 100% adaptável para dispositivos móveis, tablets e desktops, desenvolvida com React Bootstrap e variáveis CSS globais para fácil manutenção do Design System.

<br>

## 🛠️ Tecnologias Utilizadas

- **React.js** (Hooks: `useState`, `useEffect`)
- **React Router DOM** (Gerenciamento de Rotas)
- **React Bootstrap & Bootstrap** (UI, Grid System e Componentes)
- **Bootstrap Icons** (Ícones SVG)
- **CSS3** (Estilização modular, Variáveis de Ambiente e Keyframes de Animação)
- **Git & GitHub** (Versionamento de código)

<br>

## 🔥 Executando Localmente a Aplicação

Caso você deseje executar o projeto na sua máquina local para visualização ou modificação, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as Dependências:

Abra o seu terminal (WSL/Ubuntu, CMD ou PowerShell) e navegue até o diretório onde deseja armazenar o projeto:

```bash
git clone git@github.com:Wanderson-A-Timoteo/finance-vision.git
```

Depois, acesse a pasta clonada e digite a seguinte instrução para baixar todas as dependências (node_modules) necessárias:

Acesse a pasta clonada

```bash
cd finance-vision
```
Baixar todas as dependências

```bash
npm install
```

### 💨 Executando a Aplicação

Com as dependências devidamente instaladas, inicie o servidor de desenvolvimento local digitando:

```bash
npm start
```

Pronto! Dessa forma o projeto estará rodando localmente em sua máquina. Acesse no navegador:

```
http://localhost:3000
```

<br>

### 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/finance-vision/issues)**. Assim que possível, estarei respondendo a todas as dúvidas que tiverem!

<br>

## 🚀 Deploy no GitHub Pages

Para disponibilizar o **Finance Vision** online, utilizamos o **GitHub Pages**. Abaixo, o passo a passo para configurar e realizar o deploy da aplicação de forma automatizada.

### 1. Instalação do Pacote
O primeiro passo é instalar o pacote `gh-pages` como uma dependência de desenvolvimento no projeto:

```bash
npm install gh-pages --save-dev
```

### 2. Configuração do package.json

É necessário informar ao React qual será a URL base da aplicação e quais comandos devem ser executados para o deploy.

- Adicionar Homepage: No arquivo package.json, adicione a seguinte propriedade (substituindo pelo link do seu repositório):

```JSON
"homepage": "https://SEU-NOME-DE-USUARIO-DO-GITHUB.github.io/NOME-DO-PROJETO",
```

- Configurar Scripts: No mesmo arquivo, dentro do bloco "scripts", adicione os comandos de predeploy e deploy:


```JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start", // Já existe
  ...mantém o resto
}
```
### 3. Executando o Deploy

Com tudo configurado, basta rodar o comando abaixo no terminal. Ele irá gerar uma build otimizada da aplicação e criar automaticamente uma branch chamada gh-pages no GitHub com os arquivos prontos para produção:

```bash
npm run deploy
```

<br>

## Autor:

Feito com ♥ by

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>
