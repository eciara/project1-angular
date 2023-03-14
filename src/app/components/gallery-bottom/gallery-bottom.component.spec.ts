import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBottomComponent } from './gallery-bottom.component';

describe('GalleryBottomComponent', () => {
  let component: GalleryBottomComponent;
  let fixture: ComponentFixture<GalleryBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
