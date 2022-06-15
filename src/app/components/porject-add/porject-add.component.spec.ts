import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectAddComponent } from './porject-add.component';

describe('PorjectAddComponent', () => {
  let component: PorjectAddComponent;
  let fixture: ComponentFixture<PorjectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorjectAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
