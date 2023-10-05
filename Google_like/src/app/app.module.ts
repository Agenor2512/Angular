import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FavoriteListComponent } from './favorite/favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './favorite/favorite-item/favorite-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    FavoriteListComponent,
    FavoriteItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
