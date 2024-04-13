import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtSectionComponent } from './txt-section.component';

describe('TxtSectionComponent', () => {
  let component: TxtSectionComponent;
  let fixture: ComponentFixture<TxtSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxtSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TxtSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
