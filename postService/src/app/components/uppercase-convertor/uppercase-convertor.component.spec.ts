import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseConvertorComponent } from './uppercase-convertor.component';

describe('UppercaseConvertorComponent', () => {
  let component: UppercaseConvertorComponent;
  let fixture: ComponentFixture<UppercaseConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppercaseConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercaseConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
