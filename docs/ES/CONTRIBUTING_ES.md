<!--
* CONTRIBUTING.MD version 0.1.0
* If you make any modifications to this file, please update the Spanish version as well.
* Originally created by @Zyruks
* Contributors:
-->

# Contribuyendo

**Do you speak English?** Here's the guide on how to contribute in English! [CONTRIBUTING.MD](../CONTRIBUTING.md)

Antes de contribuir, por favor lee y sigue nuestro [Código de Conducta](./CODE_OF_CONDUCT_ES.md). Nos tomamos muy en serio el código de conducta y esperamos que todos los colaboradores lo sigan.

📖 **Revisa el archivo README del proyecto para más información.** El archivo README contiene información más detallada sobre cómo ejecutar el proyecto. Para acceder al archivo README, simplemente haz clic en el siguiente enlace: [README](../../README.md)

## 👉 Guía rápida

1. 🔍 **Busca un problema en el [rastreador de problemas de GitHub.](https://github.com/serudda/reward-system/issues)** Si no encuentras un problema que se adapte a tus necesidades, crea uno nuevo. [Aprende más](#encontrar-e-informar-problemas)

2. 🍴 **Haz fork al proyecto en GitHub.** [Aprende más](#cómo-hacer-fork-del-proyecto)

3. 🌿 **Crea una nueva rama a partir de la rama develop.** Esto asegura que tus cambios no interfieran con el código base principal. [Aprende más](#creando-una-nueva-rama)

4. 🛠️ **Realiza cambios en el código en tu rama local.** Puedes usar tu editor de código favorito para realizar los cambios necesarios.

5. 📤 **Haz push de tus cambios a tu versión de repositorio en GitHub.** Esto actualiza tu repositorio clonado con tus cambios.

6. 🚀 **Crea una `PULL REQUEST` desde tu rama hacia la rama develop del repositorio original.** Esto pide a los mantenedores del proyecto que revisen tus cambios y los fusionen con el código base principal. [Aprende más](#creando-un-pull-request)

7. ⏳ **Espera a que los mantenedores revisen y fusionen tu PR.** Ten paciencia y espera a que los mantenedores revisen tus cambios. Pueden pedirte que hagas más cambios antes de fusionar tus cambios con el código base principal.

## Encontrar e Informar Problemas

Si encuentras un error o tienes una solicitud de función, puedes informarla abriendo un problema en el [rastreador de problemas de GitHub.](https://github.com/serudda/reward-system/issues)

Antes de crear un nuevo problema, por favor revisa si ya existe un problema existente que cubra tu problema o solicitud de función. Si encuentras uno, puedes agregar un comentario al problema existente en lugar de crear uno nuevo.

Cuando crees un nuevo problema, trata de proporcionar tanta información como sea posible sobre el problema o la solicitud de función. Si estás informando un error, proporciona los pasos para reproducir el problema, los mensajes de error (si los hay) y la información relevante sobre tu entorno.

Incluir estos detalles ayudará a los mantenedores del proyecto a entender el problema y responder de manera más efectiva. Gracias por tu contribución al proyecto reward-system.

## Cómo hacer Fork del proyecto

1. Navega hasta el repositorio que deseas forkear en GitHub.
2. Haz clic en el botón "Fork" en la esquina superior derecha de la página.
3. Selecciona tu perfil o la organización a la que deseas hacer el fork del repositorio.
4. Espera a que el proceso de forkeo se complete.

<details>
<summary style="color: #6366F1; font-weight:bold">
Ejemplo de Fork:
</summary>
<br/>
<a href='https://user-images.githubusercontent.com/14036522/228447365-3c3e183a-b58f-4fbe-89aa-dbdb0db597d2.gif'> <img src="https://user-images.githubusercontent.com/14036522/228447365-3c3e183a-b58f-4fbe-89aa-dbdb0db597d2.gif" /> </a>

</details>

Una vez que hayas forkeado el repositorio, tendrás una copia del repositorio original en tu propia cuenta de GitHub en la que puedes trabajar sin afectar el repositorio original. Ahora puedes proceder a clonar el repositorio en tu máquina local y hacer cambios.

## Creando una nueva rama

1. Antes de crear una nueva rama a partir de la rama `develop`, es una buena práctica asegurarse de que tu rama `develop` local esté actualizada con los últimos cambios del repositorio original. Para hacer esto, puedes ejecutar el siguiente comando:

```
git remote add upstream https://github.com/serudda/reward-system
git pull upstream develop
```

El comando `git remote add` se utiliza para agregar un nuevo repositorio remoto a tu repositorio Git local. En este caso, `upstream` es el nombre del repositorio remoto que se está agregando y https://github.com/serudda/reward-system es la URL del repositorio remoto.

Al agregar `upstream`, puedes luego actualizar los últimos cambios del repositorio original (el que forkeaste) utilizando `git pull upstream develop`. Esto asegura que tu rama `develop` local esté actualizada con los últimos cambios, reduciendo las posibilidades de conflictos de fusión cuando finalmente crees una solicitud de extracción para fusionar tus cambios de vuelta al repositorio original.

1. Antes de crear una nueva rama a partir de la rama `develop`, asegúrate de estar actualmente en la rama `develop` ejecutando el siguiente comando en tu terminal:

```
git checkout develop
```

2. Para crear una nueva rama, utiliza el siguiente comando en tu terminal:

```
git checkout -b RS-XX-description develop
```

Donde `XX` es el número del problema en el que estás trabajando y `description` es un breve resumen de los cambios que planeas hacer. Esta convención de nomenclatura ayuda a realizar un seguimiento de qué rama corresponde a qué problema.

<details>
<summary style="color: #6366F1; font-weight:bold"> Example:
</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228454205-c76b4ead-51d0-43d9-bf27-4d3acbec26b8.gif">
<img src="https://user-images.githubusercontent.com/14036522/228454205-c76b4ead-51d0-43d9-bf27-4d3acbec26b8.gif" alt="branch-flow gif">
</a>
</details>

1. Una vez que hayas creado tu rama, puedes hacer tus cambios y confirmarlos como de costumbre. Recuerda actualizar regularmente tu rama de desarrollo original para mantener tu código actualizado.

2. Una vez que tus cambios estén completos, envía tu rama a tu propia copia del repositorio:

```
git push -u origin RS-XX-description
```

## Guia de Commit

Utilizamos el formato de commit convencional [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) para todos los commits. Esto nos ayuda a mantener nuestros mensajes de commit consistentes y fáciles de entender.

### Formato

Cada mensaje de commit consta de un tipo, un ámbito y un asunto:

```
<type>(<scope>): <subject>
```

<details>
<summary style="color: #6366F1; font-weight:bold" >El tipo es uno de los siguientes:</summary>
<br/>

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `build:` Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci:` Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `chore:` Other changes that don't modify src or test files
- `revert:` Reverts a previous commit

El **scope** es opcional y debe ser una breve descripción del componente afectado.

</details>

El **subject** debe ser una breve descripción del cambio. Utilice el tiempo presente en imperativo: "change" no "changed" ni "changes".

<details>
<summary style="color: #6366F1; font-weight:bold">Aquí hay algunos ejemplos de mensajes de confirmación válidos:</summary>
<br/>

- `feat:` Add new reward system API
- `fix:` Fix login error when password is blank
- `docs:` Update README with new installation instructions
- `style(css):` Add margin to rewards page
- `refactor:` Simplify rewards calculation function
- `test:` Add tests for rewards calculation function
- `build:` Upgrade to Django 3.0.0
- `ci(travis):` Add build status badge to README
- `chore:` Remove unused dependencies
- `revert:` Revert "feat: Add new reward system API"

Si no estás seguro acerca del tipo o alcance de tu commit, no dudes en solicitar comentarios en la solicitud de extracción (pull request).

</details>

## Creando un Pull Request

Una vez que hayas hecho cambios y los hayas confirmado en tu rama, es hora de crear un pull request (PR) para fusionar tus cambios en la rama principal develop del repositorio original. Aquí están los pasos:

1. Ve al repositorio original de Reward System en GitHub y haz clic en la pestaña "Pull requests". [Atajo](https://github.com/serudda/reward-system/pulls)
2. Haz clic en el botón "New pull request".
3. Selecciona tu rama como la rama "compare" y la rama develop como la rama "base".
4. Verifica que los cambios que hiciste sean los que pretendías hacer.
5. Escribe un título y una descripción para tu pull request.

<details>
<summary style="color: #6366F1; font-weight:bold">
Cómo crear un PR
</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228457852-b4007e36-b4a1-4dc4-9b7f-b058c8012b19.gif"><img src="https://user-images.githubusercontent.com/14036522/228457852-b4007e36-b4a1-4dc4-9b7f-b058c8012b19.gif"> </a>
</details>

### Título

No te preocupes si te equivocas en alguno de los siguientes puntos o si no sabes cómo hacerlo. Estaremos encantados de ayudarte.
Título

El título de tu pull request debe comenzar con el identificador de problema `[RS-XX]` seguido de una breve descripción del cambio. Por ejemplo:

```
[RS-12] Add new feature
[RS-456] Fix bug in rewards calculation
[RS-789] Update login page styling
```

El identificador de problema `RS-XX` corresponde al número del problema que la solicitud de extracción está abordando. Si está agregando una nueva característica, asegúrese de que haya un problema abierto para ella antes de crear una solicitud de extracción.

### Descripción

En la descripción de la solicitud de extracción, proporcione más detalles sobre los cambios que ha realizado. Explique el problema que está tratando de resolver y describa cómo sus cambios lo resuelven. Sea lo más claro y conciso posible. Incluya cualquier información relevante, como capturas de pantalla o enlaces a recursos externos.

Antes de crear una solicitud de extracción, asegúrese de vincularla a un problema abierto. Si está sugiriendo una nueva característica o cambio, discútalo en un problema primero. Si está arreglando un error, debe haber un problema que lo describa con los pasos para reproducirlo.

En su solicitud de extracción, incluya un resumen general de sus cambios y descríbalos en detalle. Explique por qué se requiere este cambio y qué problema resuelve. Proporcione evidencia de sus cambios, como capturas de pantalla o fragmentos de código.

También, describa cómo probó sus cambios en detalle. Incluya detalles de su entorno de prueba y las pruebas que realizó para ver cómo afecta su cambio a otras áreas del código, etc.

Finalmente, indique los tipos de cambios que introduce su código marcando las casillas relevantes. Si no está seguro acerca de alguno de estos, no dude en pedir ayuda.

---

<details>
<summary style="color: #6366F1; font-weight:bold">Ejemplos de PR:</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228446637-c092fe8c-0965-482e-8eb9-0eccc1b8075e.png"> <img src="https://user-images.githubusercontent.com/14036522/228446637-c092fe8c-0965-482e-8eb9-0eccc1b8075e.png" /> </a>
</details>

Todos los pull requests serán revisados por un mantenedor del proyecto. El mantenedor puede pedir cambios o sugerir mejoras. Una vez que el pull request es aprobado, será fusionado en la rama develop.
**¡Gracias!**

## :memo: Documentación

Una buena documentación es esencial para el éxito de cualquier proyecto. Aquí hay algunas pautas a seguir al escribir la documentación para cambios de código o nuevas características que se agregan:

📝 **Proporcione un breve resumen:** Incluya un breve resumen de lo que hace el cambio de código o la característica, y por qué se necesita. Esto ayuda a los colaboradores a comprender rápidamente el propósito de los cambios.

💻 **Proporcione ejemplos:** Proporcione ejemplos de cómo usar el nuevo código o característica. Esto ayuda a los colaboradores a comprender cómo se pueden utilizar los cambios en la práctica.

🗣 **Utilice un lenguaje claro:** Utilice un lenguaje claro y conciso, y evite el jerga técnica tanto como sea posible. Esto ayuda a los colaboradores con diferentes niveles de experiencia a comprender los cambios.

⚠️ **Destaque las limitaciones y los efectos secundarios:** Incluya información sobre cualquier efecto secundario o limitación potencial del nuevo código o característica. Esto ayuda a los colaboradores a comprender el impacto potencial de los cambios.

🔄 **Mantenga la documentación actualizada:** A medida que el proyecto evoluciona, asegúrese de actualizar la documentación para reflejar cualquier cambio. Esto ayuda a los colaboradores a mantenerse informados y asegura que el proyecto esté bien documentado.

Siguiendo estas pautas, podemos asegurarnos de que nuestro proyecto esté bien documentado y sea fácil para los colaboradores de entender.

## Recursos de aprendizaje

Si eres nuevo en la pila T3 o en Turbo Repo, aquí hay algunos recursos que pueden ayudarte a comenzar:

- [Documentación de T3.js](https://create.t3.gg/en/introduction)
- [Documentación de Turbo Repo](https://turbo.build/repo/docs)
- [Tutorial de pila T3](https://www.youtube.com/watch?v=YkOSUVzOAA4)
- [Serie de tutoriales de Turbo Repo](https://www.youtube.com/watch?v=mxLLIwZ93nY)

Si estás interesado en crear un bot de Discord con Discord.js, aquí hay algunos recursos adicionales:

- [Documentación de Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Guía de Discord.js](https://discordjs.guide/)
- [Tutorial de CodeLyon](https://www.youtube.com/watch?v=7rU_KyudGBY)

Estos recursos deberían ayudarte a comprender los conceptos básicos de T3.js, Turbo Repo y Discord.js, y ayudarte a comenzar a contribuir a nuestro proyecto. Si tienes alguna pregunta, no dudes en preguntar en nuestro rastreador de problemas.

Agradecemos tus contribuciones al proyecto de sistema de recompensas. ¡Tu tiempo y esfuerzo ayudan a hacer el proyecto mejor para todos!
