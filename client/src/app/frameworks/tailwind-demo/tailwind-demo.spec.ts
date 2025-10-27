import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindDemo } from './tailwind-demo';

describe('TailwindDemo', () => {
  let component: TailwindDemo;
  let fixture: ComponentFixture<TailwindDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
