import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodViewerComponent } from './vod-viewer.component';

describe('VodViewerComponent', () => {
  let component: VodViewerComponent;
  let fixture: ComponentFixture<VodViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
