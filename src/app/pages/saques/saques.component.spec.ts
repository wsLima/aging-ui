import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaquesComponent } from './saques.component';

describe('SaquesComponent', () => {
  let component: SaquesComponent;
  let fixture: ComponentFixture<SaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
