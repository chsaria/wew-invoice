/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TenantSearchComponent } from './tenant-search.component';

describe('TenantSearchComponent', () => {
  let component: TenantSearchComponent;
  let fixture: ComponentFixture<TenantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
