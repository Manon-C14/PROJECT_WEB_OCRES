// API : https://openweathermap.org/api

import axios from "axios";

const API_KEY = "375f01791ade4b989f154730a56a1ee3";

//const API_URL = "http://history.openweathermap.org/data/2.5/history/city";
const API_URL = "http://history.openweathermap.org/data/2.5/aggregated/month";


export default class API_OpenWeatherMap{
    constructor(city){
        //console.log("testest");
        if(document.getElementById("city-input-weather") == null){
            city = "paris";
        }
        else
        {
            city = document.getElementById("city-input-weather").value;
            // Si la ville n'est pas définit alors la ville par défault est Paris
            if(city === ""){
                city = "paris";
            }
        }
        
        this.city = city;
    }

    async fetchWeatherJanvier(){
        console.log("villeJ : " + this.city);
        return axios
        .get(`${API_URL}?q=${this.city}&month=1&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherFevrier(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=2&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherMars(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=3&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherAvril(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=4&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherMai(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=5&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherJuin(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=6&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherJuillet(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=7&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherAout(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=8&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherSeptembre(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=9&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherOctobre(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=10&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherNovembre(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=11&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
    fetchWeatherDecembre(){
        return axios
        .get(`${API_URL}?q=${this.city}&month=12&appid=${API_KEY}`,{
            crossdomain: true
        })
    }
}





/*export default function start(){
    const apiweather= new API_OpenWeatherMap();
    console.log("test");

    apiweather.fetchWeatherJanvier().then(function(response){
        const data = response.data;
        console.log("janvier : " + data.list[0].main.temp);
        var janvier = data.list[0].main.temp;
        janvier = janvier-273.15;
        document.getElementById("janvier").innerHTML = `${janvier}°C`;
    })
    apiweather.fetchWeatherFevrier().then(function(response){
        const data = response.data;
        console.log("fevrier : " + data.list[0].main.temp);
        var fevrier = data.list[0].main.temp;
        fevrier = fevrier-273.15;
        document.getElementById("fevrier").innerHTML = `${fevrier}°C`;
    })
    apiweather.fetchWeatherMars().then(function(response){
        const data = response.data;
        console.log("mars : " + data.list[0].main.temp);
        var mars = data.list[0].main.temp;
        mars = mars-273.15;
        document.getElementById("mars").innerHTML = `${mars}°C`;
    })
    apiweather.fetchWeatherAvril().then(function(response){
        const data = response.data;
        console.log("avril : " + data.list[0].main.temp);
        var avril = data.list[0].main.temp;
        avril = avril-273.15;
        document.getElementById("avril").innerHTML = `${avril}°C`;
    })
    apiweather.fetchWeatherMai().then(function(response){
        const data = response.data;
        console.log("mai : " + data.list[0].main.temp);
        var mai = data.list[0].main.temp;
        mai = mai-273.15;
        document.getElementById("mai").innerHTML = `${mai}°C`;
    })
    apiweather.fetchWeatherJuin().then(function(response){
        const data = response.data;
        console.log("juin : " + data.list[0].main.temp);
        var juin = data.list[0].main.temp;
        juin = juin-273.15;
        document.getElementById("juin").innerHTML = `${juin}°C`;
    })
    apiweather.fetchWeatherJuillet().then(function(response){
        const data = response.data;
        console.log("juillet : " + data.list[0].main.temp);
        var juillet = data.list[0].main.temp;
        juillet = juillet-273.15;
        document.getElementById("juillet").innerHTML = `${juillet}°C`;
    })
    apiweather.fetchWeatherAout().then(function(response){
        const data = response.data;
        console.log("aout : " + data.list[0].main.temp);
        var aout = data.list[0].main.temp;
        aout = aout-273.15;
        document.getElementById("aout").innerHTML = `${aout}°C`;
    })
    apiweather.fetchWeatherSeptembre().then(function(response){
        const data = response.data;
        console.log("septembre : " + data.list[0].main.temp);
        var septembre = data.list[0].main.temp;
        septembre = septembre-273.15;
        document.getElementById("septembre").innerHTML = `${septembre}°C`;
    })
    apiweather.fetchWeatherOctobre().then(function(response){
        const data = response.data;
        console.log("octobre : " + data.list[0].main.temp);
        var octobre = data.list[0].main.temp;
        octobre = octobre-273.15;
        document.getElementById("octobre").innerHTML = `${octobre}°C`;
    })
    apiweather.fetchWeatherNovembre().then(function(response){
        const data = response.data;
        console.log("novembre : " + data.list[0].main.temp);
        var novembre = data.list[0].main.temp;
        novembre = novembre-273.15;
        document.getElementById("novembre").innerHTML = `${novembre}°C`;
    })

}*/