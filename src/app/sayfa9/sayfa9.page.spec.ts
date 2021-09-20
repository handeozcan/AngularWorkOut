import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sayfa9Page } from './sayfa9.page';

describe('Sayfa9Page', () => {
  let component: Sayfa9Page;
  let fixture: ComponentFixture<Sayfa9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sayfa9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
