import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/services/search/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input()
  searchResult: SearchResult | undefined;

  constructor() {}

  ngOnInit(): void {}

  getSearchResultName(): string {
    // let playerString: string | undefined;
    // if (this.searchResult?.isTeams) {
    //   playerString = this.searchResult?.teams?[0].join(' and ') + ' vs. ';
    //   this.searchResult.teams![1].join(' and ');
    // } else {
    //   playerString = this.searchResult?.players?.join(' vs. ');
    // }

    // return playerString + ' at ' + this.searchResult?.tournamentName;
    return 'Search Result Title';
  }
}
