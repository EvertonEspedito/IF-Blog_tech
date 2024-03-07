import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfNoticeComponent } from './if-notice.component';

describe('IfNoticeComponent', () => {
  let component: IfNoticeComponent;
  let fixture: ComponentFixture<IfNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
