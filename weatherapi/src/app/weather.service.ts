import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4c36f92139746c0d831dfaf91a78dc2c&units=Imperial`).pipe(map(data => {
      const weather = data as any;
      return new Weather(weather.main.humidity, weather.main.temp, weather.main.temp_max, weather.main.temp_min, weather.wind.speed, weather.weather[0].description)
    }));
  }
}
