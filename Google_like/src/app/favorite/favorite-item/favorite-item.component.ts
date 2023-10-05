import { Component } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent {
    favorite: Favorite = {
      thumbnail: "assets/favorites_thumbnails/youtube.png",
      url: "https://www.youtube.com/",
      label: "YouTube"
    };
}
