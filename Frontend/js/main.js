// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = '';
const localApiUrl = '';

const getVisitCount = () => {
    let count = 30;
    fetch(productionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}