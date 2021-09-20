import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sayfa8Page } from './sayfa8.page';

describe('Sayfa8Page', () => {
  let component: Sayfa8Page;
  let fixture: ComponentFixture<Sayfa8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sayfa8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sayfa8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
