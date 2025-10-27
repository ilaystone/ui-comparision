import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyuiDemo } from './daisyui-demo';

describe('DaisyuiDemo', () => {
  let component: DaisyuiDemo;
  let fixture: ComponentFixture<DaisyuiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaisyuiDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyuiDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
