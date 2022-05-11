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
    { title: 'Home', route: '/home' },
    { title: 'Tournaments', route: '/tournaments' },
    { title: 'VODs', route: '/vods' },
    { title: 'Livestreams', route: '/livestreams' },
    { title: 'Players', route: '/players' },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
