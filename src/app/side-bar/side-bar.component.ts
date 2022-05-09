import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sideBarOptions = [
    'Home',
    'Tournaments',
    'VODs',
    'Livestreams',
    'Players',
    'Characters',
    'Surprise Me',
  ];

  constructor() {}

  ngOnInit(): void {}

  sideBarButtonPressed(): void {}
}
