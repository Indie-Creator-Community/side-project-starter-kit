<!--
* CONTRIBUTING.MD version 0.1.0
* If you make any modifications to this file, please update the Spanish version as well.
* Originally created by @Zyruks
* Contributors:
-->

# Contributing

**¿Hablas español?** ¡Aquí puedes encontrar la guía de cómo contribuir en español! [CONTRIBUTING_ES.md](ES/CONTRIBUTING_ES.md)

Before contributing, please read and abide by our [Code of Conduct.](https://github.com/serudda/reward-system/Code_of_conduct.MD) We take our code of conduct very seriously and expect all contributors to adhere to it.

📖 **Check out the project's README for more information.** The README contains more detailed information on how to run the project. To access the README, simply click on the link provided:: [README](../README.md)

## 👉 Quick Guide

1. 🔍 **Look for an issue to work on in the [GitHub issue tracker.](https://github.com/serudda/reward-system/issues)** If you can't find an issue that suits you, create a new issue. [Learn More](#finding-and-reporting-issues)

2. 🍴 **Fork the project on GitHub.** [Learn More](#how-to-fork-the-project)

3. 🌿 **Create a new branch from the develop branch.** This ensures that your changes don't interfere with the main codebase. [Learn More](#commit-guidelines)

4. 🛠️ **Make changes to the code in your local branch.** You can use your favorite code editor to make the necessary changes.

5. 📤 **Push your changes to your forked repository on GitHub.** This updates your forked repository with your changes.

6. 🚀 **Create a pull request (PR) from your branch to the develop branch of the original repository.** This asks the project maintainers to review your changes and merge them into the main codebase. [Learn More](#creating-a-pull-request)

7. ⏳ **Wait for the maintainers to review and merge your PR.** Be patient and wait for the maintainers to review your changes. They may ask you to make further changes before they merge your changes into the main codebase.

## Finding and Reporting Issues

If you encounter a bug or have a feature request, you can report it by opening an issue on the [GitHub issue tracker.](https://github.com/serudda/reward-system/issues)

Before creating a new issue, please check if there is already an existing issue that covers your problem or feature request. If you find one, you can add a comment to the existing issue instead of creating a new one.

When you create a new issue, try to provide as much detail as possible about the problem or feature request. If you are reporting a bug, provide steps to reproduce the problem, error messages (if any), and relevant information about your environment.

Including these details will help the maintainers of the project understand the issue and respond more effectively. Thank you for your contribution to the reward-system project.

## How to Fork the project

1. Navigate to the repository you want to fork on GitHub.
2. Click the "Fork" button in the top right corner of the page.
3. Select your profile or the organization you want to fork the repository to.
4. Wait for the forking process to complete.

<details>
<summary style="color: #6366F1; font-weight:bold">
Fork Example:
</summary>
<br/>
<a href='https://user-images.githubusercontent.com/14036522/228447365-3c3e183a-b58f-4fbe-89aa-dbdb0db597d2.gif'> <img src="https://user-images.githubusercontent.com/14036522/228447365-3c3e183a-b58f-4fbe-89aa-dbdb0db597d2.gif" /> </a>

</details>

Once you have forked the repository, you will have a copy of the original repository in your own GitHub account that you can work on without affecting the original repository. You can now proceed to clone the repository to your local machine and make changes.

## Creating a new branch

1. Before creating a new branch from the develop branch, it's a good practice to make sure that your local develop branch is up-to-date with the latest changes from the original repository. To do this, you can run the following command:

```
git remote add upstream https://github.com/serudda/reward-system
git pull upstream develop
```

The `git remote add` command is used to add a new remote repository to your local Git repository. In this case, `upstream` is the name of the remote repository being added and https://github.com/serudda/reward-system is the URL of the remote repository.

By adding `upstream`, you can then pull the latest changes from the original repository (the one you forked from) using `git pull upstream develop.` This ensures that your local `develop` branch is up-to-date with the latest changes, reducing the chances of merge conflicts when you eventually create a pull request to merge your changes back into the original repository.

1. Before creating a new branch from the develop branch, make sure you are currently on the develop branch by running the following command in your terminal:

```
git checkout develop
```

2. To create a new branch, use the following command in your terminal:

```
git checkout -b RS-XX-description develop
```

Where `XX` is the number of the issue you are working on and `description` is a brief summary of the changes you plan to make. This naming convention helps to keep track of which branch corresponds to which issue.

<details>
<summary style="color: #6366F1; font-weight:bold"> Example:
</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228454205-c76b4ead-51d0-43d9-bf27-4d3acbec26b8.gif">
<img src="https://user-images.githubusercontent.com/14036522/228454205-c76b4ead-51d0-43d9-bf27-4d3acbec26b8.gif" alt="branch-flow gif">
</a>
</details>

1. Once you have created your branch, you can make your changes and commit them as usual. Remember to regularly pull from the original develop branch to keep your code up to date.

2. Once your changes are complete, push your branch to your forked repository:

```
git push -u origin RS-XX-description
```

## Commit Guidelines

We use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format for all commits. This helps us keep our commit messages consistent and easy to understand.

### Format

Each commit message consists of a type, a scope, and a subject:

```
<type>(<scope>): <subject>
```

<details>
<summary style="color: #6366F1; font-weight:bold" >The type is one of the following:</summary>
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

The **scope** is optional and should be a brief description of the affected component.

</details>

The **subject** should be a short description of the change. Use the imperative, present tense: "change" not "changed" nor "changes".

<details>
<summary style="color: #6366F1; font-weight:bold">Here are some examples of valid commit messages:</summary>
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

If you're unsure about the type or scope of your commit, feel free to ask for feedback in the pull request.

</details>

## Creating a Pull Request

Once you've made changes and committed them to your branch, it's time to create a pull request (PR) to merge your changes into the main develop branch of the original repository. Here are the steps:

1. Go to the original Reward System repository on GitHub and click on the "Pull requests" tab. [Shortcut](https://github.com/serudda/reward-system/pulls)
2. Click on the "New pull request" button.
3. Select your branch as the "compare" branch and thedevelop branch as the "base" branch.

4. Check that the changes you made are what you intended to do.
5. Write a title and description for your pull request.

<details>
<summary style="color: #6366F1; font-weight:bold">
How to create a PR
</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228457852-b4007e36-b4a1-4dc4-9b7f-b058c8012b19.gif"><img src="https://user-images.githubusercontent.com/14036522/228457852-b4007e36-b4a1-4dc4-9b7f-b058c8012b19.gif"> </a>
</details>

### Title

Don't worry if you get any of the below wrong, or if you don't know how. We'll gladly help out.
Title

The title of your pull request should start with the issue identifier `[RS-XX]` followed by a short description of the change. For example:

```
[RS-12] Add new feature
[RS-456] Fix bug in rewards calculation
[RS-789] Update login page styling
```

The issue identifier `RS-XX` corresponds to the number of the issue that the pull request is addressing. If you're adding a new feature, make sure there's an open issue for it before creating a pull request.

### Description

In the pull request description, provide more details about the changes you've made. Explain the problem you're trying to solve, and describe how your changes solve it. Be as clear and concise as possible. Include any relevant information, such as screenshots or links to external resources.

Before creating a pull request, make sure to link it to an open issue. If you're suggesting a new feature or change, please discuss it in an issue first. If fixing a bug, there should be an issue describing it with steps to reproduce.

In your pull request, include a general summary of your changes and describe them in detail. Explain why this change is required and what problem it solves. Provide evidence of your changes, such as screenshots or code snippets.

Also, describe how you tested your changes in detail. Include details of your testing environment, and the tests you ran to see how your change affects other areas of the code, etc.

Finally, indicate the types of changes your code introduces by checking the relevant boxes. If you're unsure about any of these, don't hesitate to ask for help.

---

<details>
<summary style="color: #6366F1; font-weight:bold">PR Examples:</summary>
<br/>
<a href="https://user-images.githubusercontent.com/14036522/228446637-c092fe8c-0965-482e-8eb9-0eccc1b8075e.png"> <img src="https://user-images.githubusercontent.com/14036522/228446637-c092fe8c-0965-482e-8eb9-0eccc1b8075e.png" /> </a>
</details>

All pull requests will be reviewed by a project maintainer. The maintainer may ask for changes or suggest improvements. Once the pull request is approved, it will be merged into develop.
Thank You!

## :memo: Documentation

Good documentation is essential for the success of any project. Here are some guidelines to follow when writing documentation for code changes or new features being added:

📝 **Provide a brief summary:** Include a brief summary of what the code change or feature does, and why it is needed. This helps contributors quickly understand the purpose of the changes.

💻 **Provide examples:** Provide examples of how to use the new code or feature. This helps contributors understand how the changes can be used in practice.

🗣 **Use clear language:** Use clear and concise language, and avoid technical jargon as much as possible. This helps contributors with different levels of expertise understand the changes.

⚠️ **Highlight limitations and side effects:** Include information on any potential side effects or limitations of the new code or feature. This helps contributors understand the potential impact of the changes.

🔄 **Keep the documentation up-to-date:** As the project evolves, make sure to update the documentation to reflect any changes. This helps contributors stay informed and ensures that the project remains well-documented.

By following these guidelines, we can ensure that our project remains well-documented and easy for contributors to understand.

## Learning Resources

If you're new to the T3 stack or Turbo Repo, here are some resources that can help you get started:

- [T3.js Documentation](https://create.t3.gg/en/introduction)
- [Turbo Repo Documentation](https://turbo.build/repo/docs)
- [T3 Stack Tutorial](https://www.youtube.com/watch?v=YkOSUVzOAA4)
- [Turbo Repo tutorial series](https://www.youtube.com/watch?v=mxLLIwZ93nY)

If you're interested in creating a Discord bot with Discord.js, here are some additional resources:

- [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Discord.js Guide](https://discordjs.guide/)
- [CodeLyon Tutorial](https://www.youtube.com/watch?v=7rU_KyudGBY)

These resources should help you understand the basics of T3.js, Turbo Repo, and Discord.js, and get you started with contributing to our project. If you have any questions, don't hesitate to ask on our issue tracker.

We appreciate your contributions to the reward-system project. Your time and effort help make the project better for everyone!
