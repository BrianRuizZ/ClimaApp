// Variables + funcion fetch default

let apiKey = '8552bf156fb99bb9da4f5585082627a5'; /*Inserta la key de la api https://openweathermap.org/api*/
let select = document.querySelector('.Select')
let temperatura = document.querySelector('.temperatura')
let max = document.querySelector('.max')
let min = document.querySelector('.min')
let PaisTemp = document.querySelector('.Pais-temp')
let city = 'Buenos Aires'
fetchAPI(city)

// Event Listener + Funcion fetch

select.addEventListener('change', function cambioPais() {

    city = select.value
    PaisTemp.innerText = select.value;
    fetchAPI(city)

})
  
function fetchAPI(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        temp = data.main.temp;
        temp = temp - 273.15;
        let tempClean = parseInt(temp)
        temperatura.innerText = tempClean + "°"
        tempMax = data.main.temp_max
        tempMax = tempMax - 273.15;
        let tempMaxClean = parseInt(tempMax)
        max.innerText = tempMaxClean + "°"
        tempMin = data.main.temp_min
        tempMin = tempMin - 273.15;
        let tempMinClean = parseInt(tempMin)
        min.innerText = tempMinClean + "°"
    })
    .catch(error => {
        console.error('Error', error)
    });
}


