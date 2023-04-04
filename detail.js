// Global Variables
const countryContainer = document.querySelector(".country-detail-container");
const goBack = document.querySelector(".back");

const searchStr = window.location.search.slice(1);

let searchArr = searchStr.split("&");
let countryName = '';

let str = searchArr.find(str => str.split("=").includes("country"));
countryName = str.split("=")[1].toLowerCase();

document.addEventListener("DOMContentLoaded", () => {

    // Handle go back
    goBack.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/index.html";
    })

    getCountrydetails(countryName);
});


// searchArr.forEach(str =>{
    // if(str.split("=").includes("country")){
        // countryName =str.split("=")[1].toLowerCase();
    // }
//  })



async function getCountrydetails(name){
    let response = await fetch(`https://restcountries.com/v2/name/${name}`);
    let result = await response.json();
    console.log(result);
    return await displaycountryElement(result[0]);
}

async function displaycountryElement(country){
  let languages = country.languages.map(lang => lang.name);
const getCountrydetails = `

        <div class="count-flag">
          <img
            src=${country.flag}
            alt=${country.name}
            width="400"
            height="300"
          />
        </div>
        <div class="country-details">
          <div class="row">
            <div class="count-desc">
              <h3 class="count-name">${country.name}</h3>
              <div class="count-details">
                <p class="count-population">Population:${country.population}</p>
                <p class="count-region">Region:${country.region} </p>
                <p class="count-sub">sub region:${country.subregion}</p>
                <p class="count-capital">Capital: ${country.capital}</p>
              </div>
            </div>
            <div class="desc">
              <p class="count-level">top level domain:${country.topLevelDomain}</p>

              <p class="currencies">currencies:${country.currencies[0]. name}</p>

              <p class="language">language:${languages.join(", ")}</p>
            </div>
          </div>
          ${ await displayborders(country)}
        </div>
    
`; 
    
countryContainer.innerHTML = getCountrydetails;
}

async function displayborders(country){
  let borders = "";
  if (country.borders){
   for (let border of country.borders){
    const borderName = await grtCountryNameFromCode(border);
    borders += `<a href="/index2.html?country=${borderName.name}" class="border-country">${borderName.name}</a>`;
   }

    return `
    <div class="row border-container">
    <h4 class="border-text">Border Countries:</h4>
    <div class="borders">
    ${borders}
    </div>
  </div>
    `;
  }else {
    return "";
  }
}
async function grtCountryNameFromCode(code){
  const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  const result = await response.json();

  return result;
}