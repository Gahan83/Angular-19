/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostApiComponent } from './post-api.component';

describe('PostApiComponent', () => {
  let component: PostApiComponent;
  let fixture: ComponentFixture<PostApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
