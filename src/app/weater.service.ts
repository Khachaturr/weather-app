import { WeatherInfo } from './models/weather';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WeaterService {
  weatherFullInformation: WeatherInfo;
  latitude;
  longitude;
  apiUrl = environment.apiUrl
  apiKey = environment.apiKey


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


  async getWeatherInformation() {
      const res = await this.http.get<WeatherInfo>(`${this.apiUrl}?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${this.apiKey}`).toPromise()
      console.log(res)
      let inform = JSON.stringify(res)
      localStorage.setItem('informWeather', inform)
      return res
  }


  makeMillisecondsADay(millisecond) {
    let milliseconds = millisecond * 1000
    // console.log(milliseconds)
    return milliseconds

  }

  async getlocalstorage() {
    let weatherstr = localStorage.getItem('informWeather')
    this.weatherFullInformation = JSON.parse(weatherstr) as WeatherInfo
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

