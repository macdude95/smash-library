import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodDetailPageComponent } from './vod-detail-page.component';

describe('VodViewerComponent', () => {
  let component: VodDetailPageComponent;
  let fixture: ComponentFixture<VodDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VodDetailPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
