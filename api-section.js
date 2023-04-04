 const region = document.querySelector(".drop");
const regionName = document.querySelector(".regionName");
const input = document.querySelector(".input-container input");


const container = document.querySelector(".main-container")

document.addEventListener("DOMContentLoaded", () => {
    getCountries();
    searchCountries(input);
    region.addEventListener("click", e => {
        e.preventDefault();
        if(e.target.matches(".region")) {
        getCountriesByRegion(e.target.dataset.region);
       }
    })
})

function searchCountries(element) {
    element.addEventListener("input", (e) => {
        if(/^[a-z]+$/gi.test(e.target.value)) {
            getSearchData(e.target.value);
        }
    })
}


async function  getCountries() {
    const URL = await fetch("https://restcountries.com/v2/all");
    const response = await URL.json();
    response.forEach(element => {
        ShowCountries(element)
    });
}
async function  getCountriesByRegion(region) {
    container.innerHTML = "";
    const URL = await fetch(`https://restcountries.com/v2/region/${region}`);
    const response = await URL.json();
    response.forEach(element => {
        ShowCountries(element)
    });
}

async function  getSearchData(data) {
    container.innerHTML = "";
    const URL = await fetch(`https://restcountries.com/v2/name/${data}`);
    const response = await URL.json();
    response.forEach(element => {
        ShowCountries(element)
    });
}


function ShowCountries(data) {
    const conutryContainer = document. createElement ("a");
    conutryContainer.className = "country-container";
    conutryContainer.href = `/index2.html?country=${data.name}`
    const figure = document.createElement("figure");

    figure.classList.add("image-section");
     figure.innerHTML = `
     <div class="image-box">
         <img src="${data.flag}" alt="">
         <figcaption class="flags">
             <h3 class="flag-names">${data.name}</h3>
             <p class="population">population:<span class="numbers">${data.population}</span></p>
             <p class="region regionName">rigion:<span class="main">${data.region}</span></p>
             <p class="capital">capital:<span class="cap">${data.capital}</span></p>
         </figcaption>
     </div>

     `
     conutryContainer.appendChild (figure);

     container.appendChild(conutryContainer);

}

// region==section





