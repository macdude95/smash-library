import { SearchResult } from 'src/app/services/search/search-result';

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    isTeams: false,
    players: ['Mang0', 'Zain'],
    tournamentName: 'Big House 8',
    thumbnailLink:
      'https://i.ytimg.com/vi/cqM92Lf0IJc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKSnt0uPb-PNomIeFJ08cWr5qkZQ',
    vodId: 'mock-vod-id',
  },
  {
    isTeams: false,
    players: ['Axe', 'Wizzrobe'],
    tournamentName: 'Smash Summit 8',
    thumbnailLink:
      'https://i.ytimg.com/vi/I_ftEbCQ6Ec/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ZKffkzhEv4aGqnS0TyeAuTAnlw',
    vodId: 'mock-vod-id',
  },
];
