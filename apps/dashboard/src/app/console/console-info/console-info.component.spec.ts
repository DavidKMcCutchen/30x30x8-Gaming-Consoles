import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleInfoComponent } from './console-info.component';

describe('ConsoleInfoComponent', () => {
  let component: ConsoleInfoComponent;
  let fixture: ComponentFixture<ConsoleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
