import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_SEARCH_RESULTS } from 'src/mock-data/mock-search-results';
import { SearchResult } from './search-result';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class MockSearchService implements SearchService {
  searchResults: SearchResult[] = [];
  getSearchResults(query: string): Observable<SearchResult[]> {
    this.searchResults = MOCK_SEARCH_RESULTS;
    return of(MOCK_SEARCH_RESULTS);
  }
}
