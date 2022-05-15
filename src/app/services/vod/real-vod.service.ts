import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VodData } from 'src/app/services/vod/vod-data';

@Injectable({
  providedIn: 'root',
})
export class RealVodService {
  getVod(query: string): Observable<VodData> {
    throw new Error('Method not implemented.');
  }
}
