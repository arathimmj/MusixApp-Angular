import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:trackName/:trackArtist', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
