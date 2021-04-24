
import { Component, OnInit } from '@angular/core';
import { WeaterService } from './weater.service';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  city: string;
  currentDate: number;
  currentWeaterDescription: string;
  currentTemperature: number;
  currentIconUrl: string;
  isNight:boolean;
  isLight:boolean;

  ishourlyWeaterSection: boolean = false;
  hourlyWeater: any[] = [];
  dailyWeather: any[] = [];


  constructor(private weaterService: WeaterService) {
  }
  ngOnInit() {
    const geocord = this.weaterService.getGeocord()
    geocord.then(res => {
      this.weaterService.getWeatherInformation()
        .then(res => {
          this.weaterService.getlocalstorage()
            .then(res => {
              this.getCurrentInform()
              this.gethourlyWeaterInform()
              this.getDailyWeaterInformation()
              this.checkNightorLight()
            })
        })
    })

    setInterval(()=>{
      const geocord = this.weaterService.getGeocord()
    geocord.then(res => {
      this.weaterService.getWeatherInformation()
        .then(res => {
          this.weaterService.getlocalstorage()
            .then(res => {
              this.getCurrentInform()
              this.gethourlyWeaterInform()
              this.getDailyWeaterInformation()
              this.checkNightorLight()
            })
        })
    })

    }, 600000)
  }

  getCurrentInform() {
    this.city = this.weaterService.weatherFullInformation.timezone;
    this.currentDate = this.weaterService.makeMillisecondsADay(this.weaterService.weatherFullInformation.current.dt);
    this.currentWeaterDescription = this.weaterService.weatherFullInformation.current.weather[0].description;
    this.currentTemperature = this.weaterService.weatherFullInformation.current.temp;
    let iconCod = this.weaterService.weatherFullInformation.current.weather[0].icon;
    this.currentIconUrl = `http://openweathermap.org/img/wn/${iconCod}@2x.png`;
  }


  togleHourlyWeaterSection() {
    this.ishourlyWeaterSection = !this.ishourlyWeaterSection
  }


  gethourlyWeaterInform() {
    this.hourlyWeater = [...this.weaterService.getHourlyWeaterInformation()]
    console.log(this.hourlyWeater)
  }


  getDailyWeaterInformation() {
    this.dailyWeather = [...this.weaterService.getDailyWeatherInformation()]
  }

  checkNightorLight(){
    console.log(this.currentDate)
    let nightorLight= this.weaterService.weatherFullInformation.current.weather[0].icon.slice(2)
    // console.log(nightorLight)
    if(nightorLight==='d'){
       this.isNight=false
       
    }else{
      this.isNight=true
    }
  }

}

