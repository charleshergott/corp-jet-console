import { Component, OnInit } from '@angular/core';
import { Airport } from './airport.interface';
import { MapComponent } from '../map/map.component'; // Import the MapComponent
import * as L from 'leaflet'; // Import Leaflet


@Component({
  selector: 'app-airfields',
  // standalone: true,
  //imports: [],
  templateUrl: './airfields.component.html',
  styleUrl: './airfields.component.css'
})

export class AirfieldsComponent implements OnInit {
  airfields!: { [key: string]: Airport }; // Use definite assignment assertion
  map!: L.Map; // Leaflet map object
  markerGroup!: L.LayerGroup; // Leaflet marker group for airfields

  constructor(private mapComponent: MapComponent) { }

  ngOnInit(): void {
    // Load the JSON data from the imported file
    import('./airports.json').then((data: any) => { // Adjust the type annotation or cast to any
      // Cast the data to the desired type with a string index signature
      this.airfields = data.default as { [key: string]: Airport };
      this.addAirfieldMarkers(); // Add airfield markers after loading the data
    }).catch(error => {
      console.error('Error loading airports data:', error);
    });
  }

  private addAirfieldMarkers(): void {

    if (!this.airfields || !this.mapComponent.map) return;

    this.markerGroup = L.layerGroup().addTo(this.mapComponent.map);

    for (const key in this.airfields) {
      if (this.airfields.hasOwnProperty(key)) {
        const airfield = this.airfields[key];
        const marker = L.marker([airfield.lat, airfield.lon]).bindPopup( // Add marker for each airfield
          `<b>${airfield.lat}</b><br>${airfield.lon}, ${airfield.icao}`
        );
        this.markerGroup.addLayer(marker); // Add marker to marker group
      }
    }
  }
}
