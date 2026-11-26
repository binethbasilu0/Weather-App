//Weather App

const weatherForm =document.querySelector(".weatherForm");
const cityInput= document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKay ="48cb3cd28231494aaed105326261210";

weatherForm.addEventListener("submit",event => {
    event.preventDefault();

    const city=cityInput.value;

    if(city){

    }else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(watherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
}