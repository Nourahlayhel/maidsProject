import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWrapperComponent } from './users-wrapper.component';

describe('UsersWrapperComponent', () => {
  let component: UsersWrapperComponent;
  let fixture: ComponentFixture<UsersWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersWrapperComponent]
    });
    fixture = TestBed.createComponent(UsersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
