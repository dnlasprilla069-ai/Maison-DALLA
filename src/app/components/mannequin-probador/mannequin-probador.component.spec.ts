import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MannequinProbadorComponent } from './mannequin-probador.component';

describe('MannequinProbadorComponent', () => {
  let component: MannequinProbadorComponent;
  let fixture: ComponentFixture<MannequinProbadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MannequinProbadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MannequinProbadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
