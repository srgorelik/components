import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LruAdditionComponent } from './lru-addition.component';

describe('LruAdditionComponent', () => {
  let component: LruAdditionComponent;
  let fixture: ComponentFixture<LruAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LruAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LruAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
