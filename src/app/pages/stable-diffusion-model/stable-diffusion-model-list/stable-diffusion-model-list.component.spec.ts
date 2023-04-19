import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableDiffusionModelListComponent } from './stable-diffusion-model-list.component';

describe('StableDiffusionModelListComponent', () => {
  let component: StableDiffusionModelListComponent;
  let fixture: ComponentFixture<StableDiffusionModelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StableDiffusionModelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StableDiffusionModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
