import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movieName: string = '';
  movieDetails: any;

  constructor(private ds:DataService){}
  ngOnInit(): void {
      
  }
  searchMovie() {
    this.ds.getMovieDetails(this.movieName).subscribe(data => {
      this.movieDetails = data;
    });
  }
}


