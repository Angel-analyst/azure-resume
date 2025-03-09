# Cloud Resume Challenge - Azure

## Project Overview

This is my Cloud Resume Challenge built on Azure. It's a static website hosted on Azure Storage, with a visitor counter built on Azure Functions. The website is built with HTML, CSS, and JavaScript. The visitor counter is built with .NET and Azure Functions.

## Structure

- `frontend/`: Contains the website.
  - `main.js`: Contains visitor counter code.
- `api/`: Contains the .NET API deployed on Azure Functions.
  - `GetVisitorCounter.cs`: Contains the visitor counter code.
- `.github/workflows/`: Contains CI/CD workflow configurations.
- `.devcontainer/`: Contains the container configuration for VS Code.

## Frontend Resources

The front-end is a static site with HTML, CSS, and JavaScript. It includes a visitor counter that fetches data via an API call to an Azure Function.

- I used **<span style="color:#007bff">template</span>** to create my site.
- This [article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) explains how to use the JavaScript Fetch API to make an API call.
- [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/) is a handy tool for working with Storage Accounts.
- This is how you can [deploy a static site to blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host).


## Firts Steps

- Frontend folder contains the website
- main.js contains visitor counter code

```js
const counter = document.querySelector(".visits");

async function updateCounter() {
    let response = await fetch("https://h7fsqmvotxduazvf4ghmbka6y40igcjx.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data.counter}`; // Assuming data contains a "counter" key
}

updateCounter();
```
