import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockSearchService } from 'src/app/services/search/mock-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';

  // TODO: figure out a cleaner way to use mock services in dev
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: MockSearchService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
      this.performSearch();
    });
  }

  performSearch() {
    if (!this.searchQuery || this.searchQuery === '') {
      return;
    }
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchQuery },
    });
    // TODO: make a spinner and show it while we wait... maybe the spinner shouldn't live here though.
    // maybe the better option is to let the search service say when it's searching, and let other components
    // listen to it.... this avoid coupling between components
    this.searchService
      .getSearchResults(this.searchQuery)
      .subscribe((searchResults) => {
        // TODO: hide the spinner... again maybe this shouldn't be responsible for it
      });

    // this comopnent can have it's own spinner if it's actually in this component
  }
}
