import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsPage } from './tickets';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SharedPipes } from './../../pipes/shared.pipes';

@NgModule({
  declarations: [
    TicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsPage),
    NgxQRCodeModule,
    SharedPipes
  ],
})
export class TicketsPageModule {}
