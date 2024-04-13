import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashineMachineComponent } from './washine-machine.component';

describe('WashineMachineComponent', () => {
  let component: WashineMachineComponent;
  let fixture: ComponentFixture<WashineMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashineMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashineMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
