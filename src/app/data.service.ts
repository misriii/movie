import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  
  apiKey = 'fa1c9c03';
  apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getMovieDetails(movieName: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${movieName}`;
    return this.http.get(url);
  }
}
