import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdeaComponent } from './list-idea.component';

describe('ListIdeaComponent', () => {
  let component: ListIdeaComponent;
  let fixture: ComponentFixture<ListIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
