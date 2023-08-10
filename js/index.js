import { apiKey, extensionCoutryUrl } from "./secret.js";
import { apiCountryUrl } from "./secret.js";
import { acessKeyImg } from "./secret.js";
import { secretKeyImg } from "./secret.js";

const cityInput         = document.getElementById('input-City');
const btnSearch         = document.getElementById('btn-search');
const flagElement       = document.querySelector('#flag-img');
const cityElement       = document.querySelector('#city');
const grausElement      = document.querySelector('#graus');
const climaElement      = document.querySelector('#clima');
const ventoElement      = document.querySelector('#vento');
const umidadeElement    = document.querySelector('#umidade');

function hiddenMsgError (element) {
    const msgError  = document.querySelector(element);
    setTimeout(() => {
        msgError.style.display = "none";
      }, 5000);
}

//Change image background terms
async function changeImageBody( city ){
    const urlImg = `https://api.unsplash.com/search/photos?query=${ city }&client_id=F2iyt4xGfbZmyuQRq_D94D_AA9kQMKqti0Cl4xv4eQw`
    try {
        const response = await axios.get(urlImg) 
        const imageUrl = response.data.results[0].urls.regular;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        console.log(response.data); 
    }catch (error) {
        console.error('Erro na requisição: ', error);
    }
}

//Get data api
async function getDataApi( city ) {
    const urlApi    = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&appid=${ apiKey }&lang=pt_br`;
    const msgError  = document.querySelector('.error');

    try {
        const response = await axios.get(urlApi) 
        return response.data;
    }catch (error) {
        msgError.style.display = "block";
        hiddenMsgError('.error');
        console.error('Erro na requisição: ', error);
    }
}

//Arredonda para mais caso o valor da temperatura não seja um numero inteiro
function aproxValue ( temp ) {
    const tempNumerico      = parseFloat(temp); // ou Number(temp)
    const tempArredondado   = Math.floor(tempNumerico + 0.5);
    return tempArredondado;
}

//show data city
async function showData( city ) {
    const sectionResult = document.getElementById('result-content');
    const dataCity      =  await getDataApi(city);
    const iconWeather   =  document.querySelector('.iconWeather');
    iconWeather.src     = `https://openweathermap.org/img/wn/${dataCity.weather[0].icon}.png`

    console.log(dataCity)
    cityElement.innerText       = dataCity.name;
    grausElement.innerText      = parseInt(dataCity.main.temp);
    climaElement.innerText      = dataCity.weather[0].description;
    umidadeElement.innerText    = dataCity.main.humidity;
    ventoElement.innerText      = dataCity.wind.speed;
    flagElement.src             = `${apiCountryUrl}/${dataCity.sys.country}/${extensionCoutryUrl}`;

    //Exibir seção do resultado
    sectionResult.classList.add("animate");
    sectionResult.style.display = "block";

} 

btnSearch.addEventListener('click', ( e ) => {
    const city = cityInput.value;
    showData( city );
    changeImageBody( city );
})