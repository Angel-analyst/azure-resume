# azure-resume

This is my Cloud Resume Challenge built on Azure. It's a static website hosted on Azure Storage, with a visitor counter built on Azure Functions. The website is built with HTML, CSS, and JavaScript. The visitor counter is built with .NET and Azure Functions.

## Structure

- `frontend/`: Contains the website.
  - `main.js`: Contains visitor counter code.
- `api/`: Contains the .NET API deployed on Azure Functions.
  - `GetVisitorCounter.cs`: Contains the visitor counter code.
- `.github/workflows/`: Contains CI/CD workflow configurations.
- `.devcontainer/`: Contains the container configuration for VS Code.

## Setup

1. Make sure Docker is running.
2. Open the project in VS Code.
3. Press `Ctrl/Cmd + Shift + P` to open the command palette.
4. Type `Reopen in Container` and select:
   - `.NET API` container for working with the Azure Functions backend.
   - `JS Frontend` container for working with the frontend.
   - `Tests` container for running tests.
5. VS Code will reload and you'll be in the container.

## Frontend Resources

The front-end is a static site with HTML, CSS, and JavaScript. It includes a visitor counter that fetches data via an API call to an Azure Function.

- I used this [template](#) to create my site.
- This [article](#) explains how to use the JavaScript Fetch API to make an API call.
- [Azure Storage Explorer](#) is a handy tool for working with Storage Accounts.
- This is how you can [deploy a static site to blob storage](#).


## Firts Steps

- Frontend folder contains the website
- main.js contains visitor counter code

```js
const 
```
