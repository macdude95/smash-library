import { MockSearchService } from 'src/app/services/search/mock-search.service';
import { MockVodService } from 'src/app/services/vod/mock-vod.service';

export const serviceEnvironment = {
  searchService: MockSearchService,
  vodService: MockVodService,
};
