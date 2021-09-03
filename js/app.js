const API_KEY = `a567a19e55666c626fa90e6e54580d0a`;
const searchTempareture = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    document.getElementById('city-name').value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayData = tempareture => {
    console.log(tempareture);
    
    setInnerText('city', tempareture.name)
    setInnerText('tempareture', tempareture.main.temp)
    setInnerText('weather', tempareture.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
};