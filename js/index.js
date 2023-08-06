import { apiKey, extensionCoutryUrl } from "./secret.js";
import { apiCountryUrl } from "./secret.js";

const cityInput         = document.getElementById('input-City');
const btnSearch         = document.getElementById('btn-search');
const flagElement       = document.querySelector('#flag-img');
const cityElement       = document.querySelector('#city');
const grausElement      = document.querySelector('#graus');
const climaElement      = document.querySelector('#clima');
const ventoElement      = document.querySelector('#vento');
const umidadeElement    = document.querySelector('#umidade');

//Get data api
async function getDataApi( city ) {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&appid=${ apiKey }&lang=pt_br`;

    try {
        const response = await axios.get(urlApi) 
        return response.data;
    }catch (error) {
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
    const dataCity =  await getDataApi(city);
    
    cityElement.innerText       = dataCity.name;
    grausElement.innerText      = parseInt(dataCity.main.temp);
    climaElement.innerText      = dataCity.weather[0].description;
    umidadeElement.innerText    = dataCity.main.humidity;
    ventoElement.innerText     = dataCity.wind.speed;
    flagElement.src = `${apiCountryUrl}/${dataCity.sys.country}/${extensionCoutryUrl}`;
    
} 

btnSearch.addEventListener('click', ( e ) => {
    const city = cityInput.value;
    showData( city );
})