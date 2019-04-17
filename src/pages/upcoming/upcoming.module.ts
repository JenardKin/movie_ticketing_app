import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingPage } from './upcoming';

import { SharedPipes } from './../../pipes/shared.pipes';

@NgModule({
  declarations: [
    UpcomingPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingPage),
    SharedPipes
  ],
})
export class UpcomingPageModule {}
