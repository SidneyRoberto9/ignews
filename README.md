<div align="center" id="top"> 
 
  &#xa0;

  <!-- <a href="https://ignews.netlify.app">Demo</a> -->
</div>

<h1 align="center">Ig.News || Next.js</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/SidneyRoberto9/ignews?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/SidneyRoberto9/ignews?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/SidneyRoberto9/ignews?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/SidneyRoberto9/ignews?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/ignews?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/ignews?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/ignews?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Ignews 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Iniciando o Projeto</a> &#xa0; | &#xa0;
  <a href="#memo-license">licensa</a> &#xa0; | &#xa0;
  <a href="https://github.com/SidneyRoberto9" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre

O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.

O projeto foi desenvolvido como pratica das aulas do modulo 03 do Ignite da Rocketseat

<!-- ## :sparkles: Features

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3; -->

## :rocket: Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

## :white_check_mark: Requisitos

Necessário realizar as instalações:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

Criar conta e configurar os serviços externos:

- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

## :checkered_flag: Iniciando o Projeto

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/SidneyRoberto9/ignews.git
# Entre na pasta do repositório clonado
$ cd ignews
```

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn
# Na raiz do projeto crie um arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local
# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks
# Para iniciar a aplicação
$ yarn dev
```

## :memo: Licensa

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

Feito com :heart: by <a href="https://github.com/SidneyRoberto9" target="_blank">Sidney Roberto</a>

&#xa0;

<a href="#top">De Volta ao Topo</a>
