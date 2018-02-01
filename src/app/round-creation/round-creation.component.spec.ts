import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCreationComponent } from './round-creation.component';

describe('GameCreationComponent', () => {
  let component: RoundCreationComponent;
  let fixture: ComponentFixture<RoundCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
