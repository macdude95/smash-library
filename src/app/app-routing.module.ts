import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LivestreamsPageComponent } from './livestreams-page/livestreams-page.component';
import { PlayersPageComponent } from './players-page/players-page.component';
import { SearchResultsPageComponent } from './search/search-results-page/search-results-page.component';
import { TournamentsPageComponent } from './tournaments-page/tournaments-page.component';
import { VodDetailPageComponent } from './vods/vod-detail-page/vod-detail-page.component';
import { VodsPageComponent } from './vods/vods-page/vods-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'tournaments', component: TournamentsPageComponent },
  { path: 'players', component: PlayersPageComponent },
  { path: 'livestreams', component: LivestreamsPageComponent },
  { path: 'search', component: SearchResultsPageComponent },
  { path: 'vod/:id', component: VodDetailPageComponent },
  { path: 'vods', component: VodsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
