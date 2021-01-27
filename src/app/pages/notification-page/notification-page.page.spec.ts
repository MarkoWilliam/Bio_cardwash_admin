import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationPagePage } from './notification-page.page';

describe('NotificationPagePage', () => {
  let component: NotificationPagePage;
  let fixture: ComponentFixture<NotificationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
