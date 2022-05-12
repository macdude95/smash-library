import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VodData } from 'src/app/services/vod/vod-data';

@Injectable({
  providedIn: 'root',
})
export abstract class VodService {
  abstract getVod(query: string): Observable<VodData>;
}
