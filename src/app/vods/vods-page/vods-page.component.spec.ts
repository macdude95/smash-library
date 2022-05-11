import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodsPageComponent } from './vods-page.component';

describe('VodsPageComponent', () => {
  let component: VodsPageComponent;
  let fixture: ComponentFixture<VodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
