import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  //ngOnInit() {
  //}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.795306981776558, 110.36868749980938], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-7.795306981776558, 110.36868749980938]).addTo(this.map)
      .bindPopup('Yogyakarta')
      .openPopup();


    // Tambahkan tampilan peta dasar OpenStreetMap
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    const opentopomapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="https://opentopomap.org/about.html">OpenTopoMap</a> contributors'
    });
    const googleMapsLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps'
    });
    const cartoDBDarkMatterLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://carto.com">Carto</a> contributors, &copy; <a href="https://stamen.com">Stamen</a> basemap by Carto'
    });

    // Buat objek layer control
    const baseMaps = {
      'OpenStreetMap': osmLayer,
      'OpenTopoMap': opentopomapLayer,
      'Google Maps': googleMapsLayer,
      'CartoDBDarkMatter': cartoDBDarkMatterLayer
    };

    // Tambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    osmLayer.addTo(this.map);
  }


}

