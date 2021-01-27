import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmerPageRoutingModule } from './confirmer-routing.module';

import { ConfirmerPage } from './confirmer.page';
import { TitleModule } from '../title/title.module';
import { HeadersModule } from '../headers/headers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmerPageRoutingModule,
    TitleModule,
    HeadersModule

  ],
  declarations: [ConfirmerPage]
})
export class ConfirmerPageModule {}
