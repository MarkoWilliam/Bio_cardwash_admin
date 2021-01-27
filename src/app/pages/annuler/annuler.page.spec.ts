import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnulerPage } from './annuler.page';

describe('AnnulerPage', () => {
  let component: AnnulerPage;
  let fixture: ComponentFixture<AnnulerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
