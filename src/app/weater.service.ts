import { WeatherInfo, WeatherBasic } from './models/weather';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WeaterService {
  weatherFullInformation: WeatherInfo;
  latitude: number;
  longitude: number;
  apiUrl = environment.apiUrl
  apiKey = environment.apiKey


  constructor(private http: HttpClient) { }

  getGeocord() {
    return new Promise((resolv, reject) => {
      navigator.geolocation.getCurrentPosition((res) => {
        this.latitude = +res.coords.latitude.toFixed(6)
        this.longitude = +res.coords.longitude.toFixed(6)
        resolv(res)
      })
    })
  }


  async getWeatherInformation() {
      const res = await this.http.get<WeatherInfo>(`${this.apiUrl}?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${this.apiKey}`).toPromise()
      let inform = JSON.stringify(res)
      localStorage.setItem('informWeather', inform)
      return res
  }


  makeMillisecondsADay(millisecond: number): number {
    let milliseconds = millisecond * 1000
    return milliseconds

  }

  async getlocalstorage() {
    let weatherstr = localStorage.getItem('informWeather')
    this.weatherFullInformation = JSON.parse(weatherstr) as WeatherInfo
  }

  getHourlyWeaterInformation(): WeatherBasic[] {
    return this.weatherFullInformation.hourly
  }


  getDailyWeatherInformation() {
    return this.weatherFullInformation.daily
  }


  getCurrentWeatherInformation() {
    return this.weatherFullInformation.current
  }

}

