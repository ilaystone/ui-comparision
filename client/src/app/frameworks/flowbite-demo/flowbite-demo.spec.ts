import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbiteDemo } from './flowbite-demo';

describe('FlowbiteDemo', () => {
  let component: FlowbiteDemo;
  let fixture: ComponentFixture<FlowbiteDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowbiteDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowbiteDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
