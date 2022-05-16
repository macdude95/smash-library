import { SearchResult } from './search-result';

export interface VodSearchResult extends SearchResult {
  setId: string;
  tournamentName: string;
}
