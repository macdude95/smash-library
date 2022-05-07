import { Component, Input, OnInit } from '@angular/core';
import { MockSearchService } from 'src/app/services/search/mock-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  // TODO: figure out a cleaner way to use mock services in dev
  constructor(public searchSevice: MockSearchService) {}

  ngOnInit(): void {}
}
