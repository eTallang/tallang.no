import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoInfoComponent } from './photo-info.component';

describe('PhotoInfoComponent', () => {
  let component: PhotoInfoComponent;
  let fixture: ComponentFixture<PhotoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
