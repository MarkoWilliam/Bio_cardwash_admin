import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandePageRoutingModule } from './demande-routing.module';

import { DemandePage } from './demande.page';
import { HeadersModule } from '../headers/headers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandePageRoutingModule,
    HeadersModule
  ],
  declarations: [DemandePage]
})
export class DemandePageModule {}
