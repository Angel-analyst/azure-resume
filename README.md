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

## Backend Resources  
The back-end is an **HTTP triggered Azure Function** with Cosmos DB input and output binding. The function retrieves a CosmosDB item, increments it, saves it, and returns its value to the caller.  

- [Create a Cosmos DB account](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal)  
- [Create an HTTP triggered Azure Function in Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=node-v4%2Cpython-v2%2Cisolated-process%2Cquick-create&pivots=programming-language-csharp)  
- [Azure Functions Cosmos DB bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=isolated-process%2Cextensionv4&pivots=programming-language-csharp)  
- [Retrieve a Cosmos DB item with Functions binding](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-input?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv4&pivots=programming-language-csharp)  
- [Write to a Cosmos DB item with Functions binding](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-output?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv4&pivots=programming-language-csharp)  
- [Enable CORS with Azure Functions locally](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local?pivots=programming-language-csharp#local-settings-file) and once it's [deployed to Azure](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=azure-portal%2Cto-premium#cors).  

## Testing Resources  
[Testing is important](https://dev.to/flippedcoding/its-important-to-test-your-code-3lid). Though my tests are simple, they exist. I am using .NET but some of these resources will apply to any language.  

- [Getting Started with xUnit.net](https://xunit.net/docs/getting-started/v2/netcore/cmdline)  
- [Testing Azure Functions](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-net)  

## CI/CD Resources  
- [Deploy a blob storage static site with GitHub Actions](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=openid)  
- [Deploy an Azure Function to Azure with GitHub Actions](https://github.com/marketplace/actions/azure-functions-action)  
- [Implement .NET testing in GitHub Actions](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-net)  


