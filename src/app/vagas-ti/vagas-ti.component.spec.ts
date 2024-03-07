import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasTiComponent } from './vagas-ti.component';

describe('VagasTiComponent', () => {
  let component: VagasTiComponent;
  let fixture: ComponentFixture<VagasTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
