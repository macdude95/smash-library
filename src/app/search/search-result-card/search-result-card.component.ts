import { Component, Input, OnInit } from '@angular/core';
import { PlayerSearchResult } from 'src/app/services/search/data/player-search-result';
import { SearchResult } from 'src/app/services/search/data/search-result';
import { VodSearchResult } from 'src/app/services/search/data/vod-search-result';
import SearchResultsUtils from 'src/app/services/search/search-results-utils';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input()
  searchResult!: SearchResult;

  getRouterLink = SearchResultsUtils.getRouterLink;

  constructor() {}

  ngOnInit(): void {}
}
