import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result';

@Injectable({
  providedIn: 'root',
})
export abstract class SearchService {
  abstract searchResults: SearchResult[];

  abstract getSearchResults(query: string): Observable<SearchResult[]>;
}
