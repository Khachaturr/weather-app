export interface WeatherInfo {
    lat: number
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: WeatherBasic,
    hourly: WeatherBasic[],
    daily: WeatherBasic[]
}

export interface WeatherBasic {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number | any,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: Weather[]
}


export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

