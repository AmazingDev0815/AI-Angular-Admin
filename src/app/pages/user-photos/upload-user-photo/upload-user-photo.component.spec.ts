import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUserPhotoComponent } from './upload-user-photo.component';

describe('UploadUserPhotoComponent', () => {
  let component: UploadUserPhotoComponent;
  let fixture: ComponentFixture<UploadUserPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadUserPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadUserPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
