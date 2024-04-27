import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { MarkerService } from './marker.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, MapComponent],
  providers: [
    MarkerService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'angular-leaflet-example';

  constructor() {

  }

}




