import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaPanelComponent } from './bolsa-panel.component';

describe('BolsaPanelComponent', () => {
  let component: BolsaPanelComponent;
  let fixture: ComponentFixture<BolsaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
