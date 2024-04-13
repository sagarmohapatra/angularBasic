import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsex2Component } from './textsex2.component';

describe('Textsex2Component', () => {
  let component: Textsex2Component;
  let fixture: ComponentFixture<Textsex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textsex2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Textsex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
