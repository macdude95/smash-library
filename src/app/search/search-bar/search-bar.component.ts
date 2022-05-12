import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
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
    this.searchService
      .getSearchResults(this.searchQuery)
      .subscribe((searchResults) => {
        console.log('got the search results' + searchResults[0].vodId);
      });
  }
}
