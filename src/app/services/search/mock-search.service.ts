import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { MOCK_SEARCH_RESULTS } from 'src/mock-data/mock-search-results';
import { SearchResult } from './data/search-result';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class MockSearchService implements SearchService {
  searchResults: SearchResult[] = [];
  getSearchResults(query: string): Observable<SearchResult[]> {
    this.searchResults = [];
    return of(MOCK_SEARCH_RESULTS).pipe(
      delay(500),
      tap((searchResults) => {
        this.searchResults = searchResults;
      })
    );
  }
}
