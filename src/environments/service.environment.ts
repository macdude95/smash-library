import { RealSearchService } from 'src/app/services/search/real-search.service';
import { RealVodService } from 'src/app/services/vod/real-vod.service';

export const serviceEnvironment = {
  searchService: RealSearchService,
  vodService: RealVodService,
};
