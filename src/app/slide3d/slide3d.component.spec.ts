import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide3dComponent } from './slide3d.component';

describe('Slide3dComponent', () => {
  let component: Slide3dComponent;
  let fixture: ComponentFixture<Slide3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Slide3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
