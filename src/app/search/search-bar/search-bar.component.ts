import { Component, OnInit } from '@angular/core';
import { MockSearchService } from 'src/app/services/search/mock-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';

  // TODO: figure out a cleaner way to use mock services in dev
  constructor(private searchService: MockSearchService) {}

  ngOnInit(): void {}

  performSearch() {
    this.searchService
      .getSearchResults(this.searchQuery)
      .subscribe((searchResults) => {
        // TODO: create search result components
        // alternatively, make searchservice just notify a different service to update a different view
      });
  }
}
