const region = document.querySelector(".drop");
const container = document.querySelector(".main-container");
getCountries();

 region.addEventListener("click", e => {
   if(e.target.matches(".Region")) {
    getCountriesByRegion(e.target.textContent);
    }
  })


function getCountries(){
    fetch(`https://restcountries.com/v2/all`)
    .then(response => response.json())
    .then(result => {
result.forEach(countries => getCountriesDetails(countries));
    console.log(result);
});
    }

    function getregion(region){
        container.innerHTML = "";
        fetch("https://restcountries.com/v2/region/${region}")
        .then(response => response.json())
        .then(result => {
    result.forEach(countries => getCountriesDetails(countries));
        console.log(result);
    });
     }
    
    function getCountriesDetails(countries){
        const figure = document.createElement("figure");
        const countriesdetails = `
        <div class="image-box">
        <img src="${countries.flag}" alt="">
        <figcaption class="flags">
            <h3 class="flag-names">${countries.name}</h3>
            <p class="population">population:<span class="numbers">${countries.population}</span></p>
            <p class="region regionName">rigion:<span class="main">${countries.region}</span></p>
            <p class="capital">capital:<span class="cap">${countries.capital}</span></p>
        </figcaption>
    </div>
        `;
        figure.innerHTML = countriesdetails;

        container.appendChild(figure);
    }