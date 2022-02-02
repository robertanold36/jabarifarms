import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasRecordComponent } from './canvas-record.component';

describe('CanvasRecordComponent', () => {
  let component: CanvasRecordComponent;
  let fixture: ComponentFixture<CanvasRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
