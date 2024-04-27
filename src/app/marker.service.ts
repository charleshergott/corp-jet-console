import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  airportsUrl: string = '/assets/data/airports.geojson';

  constructor(private http: HttpClient) { }

  makeAirportMarkers(map: L.Map): void {
    this.http.get(this.airportsUrl).subscribe((data: any) => {
      const markers = L.markerClusterGroup({
        iconCreateFunction: this.customClusterIcon
      });

      Object.keys(data).forEach((key: string) => {
        const airport = data[key];
        const lon = airport.lon;
        const lat = airport.lat;
        const marker = L.marker([lat, lon]);

        const popupContent = `
          <div>
            <h3>${airport.icao}</h3>
            <p><strong>City:</strong> ${airport.name}</p>
            <p><strong>State:</strong> ${airport.city}</p>
            <p><strong>Country:</strong> ${airport.country}</p>
          </div>
        `;
        marker.bindPopup(popupContent);

        marker.addTo(markers);
      });

      markers.addTo(map);
    });
  }
  customClusterIcon(cluster: L.MarkerCluster): L.DivIcon {
    const count = cluster.getChildCount();
    let size = '';

    if (count < 10) {
      size = 'small';
    } else if (count >= 10 && count < 100) {
      size = 'medium';
    } else {
      size = 'large';
    }

    return new L.DivIcon({
      html: `<div class="custom-cluster-icon custom-cluster-${size}">${count}</div>`,
      className: `custom-cluster-${size}`,
      iconSize: L.point(40, 40), // Adjust icon size here

    });
  }

}
