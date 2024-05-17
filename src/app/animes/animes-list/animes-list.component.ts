import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { AnimesService } from '../animes.service';
@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  animes: Array<Animes>=[];
  averagueRating: number | undefined;
  totalEpisodes: Number | undefined;

  constructor(private animesService: AnimesService) { }

  getAnimes():void{
    this.animesService.getAnimes().subscribe((animes)=>{this.animes=animes;})
    this.calculateAverageRating();
    this.totalEpisodes;
  }
  ngOnInit() {
  }

  calculateAverageRating() {
    const totalRaiting = this.animes.reduce((sum, serie) => sum + serie.rating, 0);
    this.averagueRating = totalRaiting / this.animes.length;
  }

  CalculateTotalEpisodes() {
    const total = this.animes.reduce((sum, serie) => sum + serie.episode, 0);
    this.totalEpisodes = total;
  }
  

}
