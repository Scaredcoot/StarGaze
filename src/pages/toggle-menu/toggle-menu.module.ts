import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggleMenuPage } from './toggle-menu';

@NgModule({
  declarations: [
    ToggleMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ToggleMenuPage),
  ],
})
export class ToggleMenuPageModule {}
