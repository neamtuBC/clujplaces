import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  lat: number = 46.7833002;
  lng: number = 23.4764293;
  second_lat: number = 46.7843002;
  second_lng: number = 22.4754293;
}
