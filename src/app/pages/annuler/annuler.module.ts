import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnulerPageRoutingModule } from './annuler-routing.module';

import { AnnulerPage } from './annuler.page';
import { TitleModule } from '../title/title.module';
import { HeadersModule } from '../headers/headers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnulerPageRoutingModule,
    TitleModule,
    HeadersModule
  ],
  declarations: [AnnulerPage]
})
export class AnnulerPageModule {}
