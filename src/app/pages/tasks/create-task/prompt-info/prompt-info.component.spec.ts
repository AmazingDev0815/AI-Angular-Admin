import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptInfoComponent } from './prompt-info.component';

describe('PromptInfoComponent', () => {
  let component: PromptInfoComponent;
  let fixture: ComponentFixture<PromptInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
