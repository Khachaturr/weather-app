import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WeaterService {
  weatherFullInformation: any;
  latitude;
  longitude;


  constructor(private http: HttpClient) { }

  getGeocord() {
    return new Promise((resolv, reject) => {
      navigator.geolocation.getCurrentPosition((res) => {
        this.latitude = res.coords.latitude.toFixed(6)
        this.longitude = res.coords.longitude.toFixed(6)
        // console.log(res)
        // console.log(this.latitude)
        // console.log(this.longitude)
        resolv(res)
      })
    })
  }


  getWeatherInformation() {
    return new Promise((resolve, rejects) => {
      this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=9475fddef7be250d0ff4b3e8600bb50a`).subscribe(res => {
        console.log(res)
        let inform = JSON.stringify(res)
        localStorage.setItem('informWeather', inform)
        resolve(res)
      })
    })
  }


  makeMillisecondsADay(millisecond) {
    let milliseconds = millisecond * 1000
    // console.log(milliseconds)
    return milliseconds

  }

  getlocalstorage() {
    return new Promise((resolve, rejects) => {
      let weatherstr = localStorage.getItem('informWeather')
      this.weatherFullInformation = JSON.parse(weatherstr)
      //  console.log('lok')
      resolve(weatherstr)
    })
  }

  getHourlyWeaterInformation() {
    return this.weatherFullInformation.hourly
  }


  getDailyWeatherInformation() {
    return this.weatherFullInformation.daily
  }


  getCurrentWeatherInformation() {
    return this.weatherFullInformation.current
  }

}

