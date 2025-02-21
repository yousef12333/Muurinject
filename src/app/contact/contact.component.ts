import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { FooterComponent } from "../footer/footer.component";
import { SquareComponent } from "../square/square.component";
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SquareComponent, PageBannerComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngOnInit(): void{
    var map = L.map('map').setView([51.1949081, 4.4784433], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([51.1949081, 4.4784433]).addTo(map);
  var title = L.marker([51.1949081, 4.4784433], {
    icon: L.divIcon({
        className: 'text-below-marker',
        html: "Muurinject",
        iconSize: [400, 40],
        iconAnchor: [30, 2] 
    })
}).addTo(map);

}
  
}
