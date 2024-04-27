import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster'; // Import Leaflet marker cluster plugin if you're using it
import { MarkerService } from '../marker.service';

const iconRetinaUrl = 'assets/mdi--airport.svg';
const iconUrl = '';
const shadowUrl = '';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', './cluster-icons.css'],
  standalone: true,
  providers: [MarkerService]
})
export class MapComponent implements AfterViewInit {
  map!: L.Map;
  markerLayer!: L.LayerGroup;
  layerControl!: L.Control.Layers;
  currentPositionMarker!: L.Marker;

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeAirportMarkers(this.map);
    this.addCurrentPositionMarker();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // Create a marker layer
    this.markerLayer = L.layerGroup().addTo(this.map);

    // Create a layer control
    this.layerControl = L.control.layers(undefined, undefined);

    // Add marker layer to the layer control with a name
    this.layerControl.addOverlay(this.markerLayer, 'Markers');


  }

  private addCurrentPositionMarker(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const currentPosition: [number, number] = [latitude, longitude];

        const customIcon = L.icon({
          iconUrl: 'assets/user.svg',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        this.currentPositionMarker = L.marker(currentPosition, { icon: customIcon }).addTo(this.map);
        this.currentPositionMarker.bindPopup('Your current position').openPopup();
      }, (error) => {
        console.error('Error getting current position:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }


}


