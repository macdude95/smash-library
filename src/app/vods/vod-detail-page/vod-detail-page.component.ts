import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VodService } from 'src/app/services/vod/vod.service';
import { VodData } from '../../services/vod/vod-data';

@Component({
  selector: 'app-vod-detail-page',
  templateUrl: './vod-detail-page.component.html',
  styleUrls: ['./vod-detail-page.component.scss'],
})
export class VodDetailPageComponent implements OnInit {
  vodData: VodData | undefined;
  safeUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private vodService: VodService
  ) {}

  ngOnInit(): void {
    const vodId = this.route.snapshot.paramMap.get('id');
    if (vodId) {
      this.vodService.getVod(vodId).subscribe((vodData) => {
        this.vodData = vodData;
        const embedUrl = `https://www.youtube.com/embed/${this.vodData?.youtubeId}`;
        this.safeUrl =
          this.domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      });
    }
  }

  getVodTitle(): string | undefined {
    if (!this.vodData) {
      return undefined;
    }
    const playerString = this.vodData.players?.join(' vs. ');
    return `${playerString} at ${this.vodData.tournamentName}`;
  }
}
