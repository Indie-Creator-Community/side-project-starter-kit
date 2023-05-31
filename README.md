![image](https://github.com/Indie-Creator-Community/side-project-starter-kit/assets/10075532/6ef96197-5ac7-4812-a751-eb4308858ad7)

<!-- GETTING STARTED -->
## Getting Started

This repository was created with the intention that it can serve as a base project, oriented to the creation of Side Projects that need to be built in an orderly, scalable and above all that allows to add features quickly.

It is based on [T3 Stack](https://create.t3.gg/) with a few very subjective modifications.

Simply cloning the project, and configuring the environment variables, you should be able to start without any problem.

**More details here:**
https://twitter.com/serudda/status/1653172466725064705?s=20

-----

## Installation 

### Manual Installation

Here are the steps to execute the project:

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

   4.1 (Optional) Generate Local Database
   Before proceeding, please ensure that Docker is installed and docker's daemon is running on your system. If you don't have Docker, you will need to install it.
   
   To generate a local database, execute the following command:
      ```
      pnpm db:docker:startup
      ```
   This command will create a local database using Docker. Please note that you will need to modify the `DATABASE_URL` variable in your .env.* file to point to this local database.

   If you need to shut down the database at any time, you can do so by executing the following command:

      ```
      pnpm db:docker:shutdown
      ```

   This will safely shut down the Docker database. Remember to update your `DATABASE_URL` if you switch back to another database.

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

### Docker Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Indie-Creator-Community/side-project-starter-kit.git
   ```
2. Change .env.template to .env.local and change the `DATABASE_URL`
   ```sh
   DATABASE_URL="postgresql://root:admin@postgres:5432/started-db?schema=public"
   ```
3. execute the following statement
   ```sh
   pnpm app:docker:startup
   ```
4. to shut down the application
   ```sh
   pnpm app:docker:shutdown
   ```



