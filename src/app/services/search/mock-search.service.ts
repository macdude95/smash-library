import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MOCK_SEARCH_RESULTS } from 'src/mock-data/mock-search-results';
import { SearchResult } from './search-result';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class MockSearchService implements SearchService {
  searchResults: SearchResult[] = [];
  getSearchResults(query: string): Observable<SearchResult[]> {
    of(query)
      .pipe(delay(500))
      .subscribe(() => {
        this.searchResults = MOCK_SEARCH_RESULTS; // UI doesn't delay cuz this is set immediately... hmmm i should delay this in a cleaner way i think
      });
    return of(MOCK_SEARCH_RESULTS).pipe(delay(500));
  }
}
