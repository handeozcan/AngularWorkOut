import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sayfa5Page } from './sayfa5.page';

describe('Sayfa5Page', () => {
  let component: Sayfa5Page;
  let fixture: ComponentFixture<Sayfa5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sayfa5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
