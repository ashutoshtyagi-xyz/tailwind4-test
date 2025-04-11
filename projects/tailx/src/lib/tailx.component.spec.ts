import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailxComponent } from './tailx.component';

describe('TailxComponent', () => {
  let component: TailxComponent;
  let fixture: ComponentFixture<TailxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
