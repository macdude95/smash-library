export interface SearchResult {
  isTeams: boolean;
  teams?: [string[], string[]];
  players?: [string, string];
  tournamentName: string;
  youtubeLink: string;
  thumbnailLink: string;
}
