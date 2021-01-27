import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptePageRoutingModule } from './compte-routing.module';

import { ComptePage } from './compte.page';
import { HeadersModule } from '../headers/headers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptePageRoutingModule,
    HeadersModule
  ],
  exports: [ComptePage],
  declarations: [ComptePage]
})
export class ComptePageModule {}
