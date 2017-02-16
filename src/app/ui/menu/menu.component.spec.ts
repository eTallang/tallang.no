/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import { MenuComponent } from './menu.component';
import { AuthService, Store, ToastService } from '../../services';

class ServiceStub {}

@Component({
  template: ''
})
class StubComponent {
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent, StubComponent ],
      providers: [
        { provide: AuthService, useClass: ServiceStub },
        Store,
        MdIconRegistry,
        { provide: ToastService, useClass: ServiceStub } ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([
           { path: '["", pictures]', component: StubComponent }
         ]) ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
