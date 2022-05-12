import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VodData } from 'src/app/services/vod/vod-data';
import { MOCK_VOD_DATA } from 'src/mock-data/mock-vod-data';

@Injectable({
  providedIn: 'root',
})
export class MockVodService {
  getVod(query: string): Observable<VodData> {
    return of(MOCK_VOD_DATA).pipe(delay(500));
  }
}
