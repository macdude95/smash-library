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

  getSearchResultTitle(): string {
    return 'Search Result Title';
  }
}
