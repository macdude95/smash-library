import { Component, OnInit } from '@angular/core';
import { MockSearchService } from 'src/app/services/search/mock-search.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent implements OnInit {
  constructor(public searchService: MockSearchService) {}

  ngOnInit(): void {}
}
