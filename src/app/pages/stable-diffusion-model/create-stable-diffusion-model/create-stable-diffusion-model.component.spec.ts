import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStableDiffusionModelComponent } from './create-stable-diffusion-model.component';

describe('CreateStableDiffusionModelComponent', () => {
  let component: CreateStableDiffusionModelComponent;
  let fixture: ComponentFixture<CreateStableDiffusionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStableDiffusionModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStableDiffusionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
