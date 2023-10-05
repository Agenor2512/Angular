import { Component } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {
  favoriteList: Array<Favorite> = [
    {
      thumbnail: "assets/favorites_thumbnails/youtube.png",
      url: "https://www.youtube.com/",
      label: "YouTube"
    }
  ];
}
