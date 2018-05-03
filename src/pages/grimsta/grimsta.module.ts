import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrimstaPage } from './grimsta';

@NgModule({
  declarations: [
    GrimstaPage,
  ],
  imports: [
    IonicPageModule.forChild(GrimstaPage),
  ],
})
export class GrimstaPageModule {}
