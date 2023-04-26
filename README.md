<!-- GETTING STARTED -->
## Getting Started

Este repositorio fue creado con la intension de que pueda servir como proyecto base, orientado a la creacion de Side Projects que necesiten ser construidos de forma ordenada, escalable y sobretodo que permita agregar features rapidamente.

Esta basado en [T3 Stack](https://create.t3.gg/) son unas pequeñas modificaciones muy subjetivas.

Simplemente clonando el proyecto, y configurando las variables de entorno, deberias poder empezar sin ningun tipo de problema.

### Installation

A continuacion los pasos para ejecutar el proyecto:

1. Clone the repo
   ```sh
   git clone https://github.com/Indie-Creator-Community/side-project-starter-kit.git
   ```
3. Install NPM packages
   ```sh
   pnpm install
   ```
4. You will find an .env.example file, where you will see the basic variables for the project to work.

   ```js
   DISCORD_CLIENT_ID= 'ENTER YOUR CLIENT ID';
   ```
5. This project uses an .env file depending on the environment in which the app is running.

   `local: .env.local`
   `development: .env.development`
   `production: .env.production`
   

6. To make a build of all apps and packages

   ```sh
   pnpm build
   ```
7. Run the apps/nextjs

   ```sh
   pnpm dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
