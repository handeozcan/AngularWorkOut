import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sayfa4Page } from './sayfa4.page';

describe('Sayfa4Page', () => {
  let component: Sayfa4Page;
  let fixture: ComponentFixture<Sayfa4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sayfa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
