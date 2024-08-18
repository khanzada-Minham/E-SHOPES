import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChackOutComponent } from './chack-out.component';

describe('ChackOutComponent', () => {
  let component: ChackOutComponent;
  let fixture: ComponentFixture<ChackOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChackOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChackOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
