import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbanerComponent } from './subbaner.component';

describe('SubbanerComponent', () => {
  let component: SubbanerComponent;
  let fixture: ComponentFixture<SubbanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubbanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
