import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarOption } from './side-bar-option';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sideBarOptions: SideBarOption[] = [
    { title: 'Home', route: '/home', icon: 'home' },
    { title: 'Tournaments', route: '/tournaments', icon: 'assessment' },
    { title: 'VODs', route: '/vods', icon: 'video_library' },
    { title: 'Livestreams', route: '/livestreams', icon: 'live_tv' },
    { title: 'Players', route: '/players', icon: 'person' },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
