import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersboardComponent } from './usersboard.component';

describe('UsersboardComponent', () => {
  let component: UsersboardComponent;
  let fixture: ComponentFixture<UsersboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
