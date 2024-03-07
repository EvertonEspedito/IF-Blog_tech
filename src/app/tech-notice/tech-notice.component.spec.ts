import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNoticeComponent } from './tech-notice.component';

describe('TechNoticeComponent', () => {
  let component: TechNoticeComponent;
  let fixture: ComponentFixture<TechNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
