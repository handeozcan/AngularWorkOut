import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sayfa6Page } from './sayfa6.page';

describe('Sayfa6Page', () => {
  let component: Sayfa6Page;
  let fixture: ComponentFixture<Sayfa6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sayfa6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
