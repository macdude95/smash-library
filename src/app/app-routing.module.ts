import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { VodViewerComponent } from './vod-viewer/vod-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'vod/:id', component: VodViewerComponent },
  // TODO: create tournament (at least top 8) view - maybe use this: https://github.com/Drarig29/brackets-viewer.js/issues/41
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
