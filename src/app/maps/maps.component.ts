import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 10.3094082, lng: 123.880070 },
    zoom : 14
 }
 windowSize = {
height : 500,
width : 500
 };
 marker = {
    position: { lat: 10.3094082, lng: 123.880070 },
 }
 infowindow = new google.maps.InfoWindow();
  // apiLoaded: Observable<boolean>;
  // constructor(httpClient: HttpClient) {
  //   this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBPnimh_J0Dfl9KyRtMrH-S_96gik5cP7o', 'callback')
  //       .pipe(
  //         map(() => true),
  //         catchError(() => of(false)),
  //       );
  // }
  constructor() {}
  ngOnInit(): void {
  }

}
