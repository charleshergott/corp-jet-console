import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftUploadComponent } from './aircraft-upload.component';

describe('AircraftUploadComponent', () => {
  let component: AircraftUploadComponent;
  let fixture: ComponentFixture<AircraftUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircraftUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
