import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SearchResultCardComponent } from './search/search-result-card/search-result-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TournamentsPageComponent } from './tournaments-page/tournaments-page.component';
import { PlayersPageComponent } from './players-page/players-page.component';
import { LivestreamsPageComponent } from './livestreams-page/livestreams-page.component';
import { VodsPageComponent } from './vods/vods-page/vods-page.component';
import { SearchResultsPageComponent } from './search/search-results-page/search-results-page.component';
import { VodDetailPageComponent } from './vods/vod-detail-page/vod-detail-page.component';
import { SearchService } from './services/search/search.service';
import { serviceEnvironment } from 'src/environments/service.environment';
import { VodService } from './services/vod/vod.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultCardComponent,
    SideBarComponent,
    VodDetailPageComponent,
    HomePageComponent,
    TournamentsPageComponent,
    PlayersPageComponent,
    LivestreamsPageComponent,
    VodsPageComponent,
    SearchResultsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [
    {
      provide: SearchService,
      useClass: serviceEnvironment.searchService,
    },
    {
      provide: VodService,
      useClass: serviceEnvironment.vodService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
