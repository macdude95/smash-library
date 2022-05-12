import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VodData } from 'src/app/services/vod/vod-data';
import { MOCK_VOD_DATA } from 'src/mock-data/mock-vod-data';

@Injectable({
  providedIn: 'root',
})
export class RealVodService {
  getVod(query: string): Observable<VodData> {
    throw new Error('Method not implemented.');
  }
}
