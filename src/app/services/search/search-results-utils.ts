import { PlayerSearchResult } from './data/player-search-result';
import { SearchResult } from './data/search-result';
import { VodSearchResult } from './data/vod-search-result';

export default class SearchResultsUtils {
  static getRouterLink(searchResult: SearchResult): string {
    if ((searchResult as PlayerSearchResult).playerId) {
      return `/player/${(searchResult as PlayerSearchResult).playerId}`;
    }
    if ((searchResult as VodSearchResult).setId) {
      return `/vod/${(searchResult as VodSearchResult).setId}`;
    }
    return `/home`;
  }
}
