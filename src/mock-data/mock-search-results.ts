import { PlayerSearchResult } from 'src/app/services/search/data/player-search-result';
import { SearchResult } from 'src/app/services/search/data/search-result';
import { VodSearchResult } from 'src/app/services/search/data/vod-search-result';

const mockPlayerSearchResults: PlayerSearchResult[] = [
  {
    title: 'Mang0',
    imageLink:
      'https://images.smash.gg/images/user/11097/image-d85f45f95ead08520e365d3d15da0ab1.jpg',
    playerId: 'mock-player-id',
  },
];

const mockVodSearchResults: VodSearchResult[] = [
  {
    title: 'Mang0 vs. Zain at Big House 8',
    imageLink:
      'https://i.ytimg.com/vi/cqM92Lf0IJc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKSnt0uPb-PNomIeFJ08cWr5qkZQ',
    setId: 'mock-set-id-mang0-zain',
    tournamentName: 'Big House 8',
  },
  {
    title: 'Axe vs. Wizzrobe at Smash Summit 8',
    imageLink:
      'https://i.ytimg.com/vi/I_ftEbCQ6Ec/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ZKffkzhEv4aGqnS0TyeAuTAnlw',
    setId: 'mock-set-id-axe-wizzy',
    tournamentName: 'Smash Summit 8',
  },
];

export const MOCK_SEARCH_RESULTS: SearchResult[] = mockVodSearchResults;
