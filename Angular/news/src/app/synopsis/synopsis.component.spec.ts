import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import Article from '../models/article';

import { SynopsisComponent } from './synopsis.component';

describe('SynopsisComponent', () => {
  let component: SynopsisComponent;
  let fixture: ComponentFixture<SynopsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ SynopsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisComponent);
    component = fixture.componentInstance;
    component.article = new Article();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
