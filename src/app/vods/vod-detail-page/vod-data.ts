export interface VodData {
  isTeams: boolean;
  teams?: [string[], string[]];
  players?: [string, string];
  tournamentName: string;
  youtubeId: string;
  vodId: string;
}
