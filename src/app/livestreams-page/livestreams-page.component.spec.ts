import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamsPageComponent } from './livestreams-page.component';

describe('LivestreamsPageComponent', () => {
  let component: LivestreamsPageComponent;
  let fixture: ComponentFixture<LivestreamsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
