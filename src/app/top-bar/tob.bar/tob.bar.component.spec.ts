import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tob.BarComponent } from './tob.bar.component';

describe('Tob.BarComponent', () => {
  let component: Tob.BarComponent;
  let fixture: ComponentFixture<Tob.BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tob.BarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tob.BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
