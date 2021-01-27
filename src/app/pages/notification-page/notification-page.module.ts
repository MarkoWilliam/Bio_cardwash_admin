import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPagePageRoutingModule } from './notification-page-routing.module';

import { NotificationPagePage } from './notification-page.page';
import { HeadersModule } from '../headers/headers.module';
import { ComptePage } from '../compte/compte.page';
import { ComptePageModule } from '../compte/compte.module';
import { TitleComponent } from '../title/title.component';
import { TitleModule } from '../title/title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPagePageRoutingModule,
    HeadersModule,
    ComptePageModule,
    TitleModule
  ],
  entryComponents: [ComptePage],
  declarations: [NotificationPagePage],
})
export class NotificationPagePageModule {}
