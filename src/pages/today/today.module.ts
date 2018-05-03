import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayPage } from './today';
import { GardetPage} from '../gardet/gardet';
import { NackaPage} from '../nacka/nacka';
import { JarvaPage} from '../jarva/jarva';
import { GrimstaPage} from '../grimsta/grimsta';
import { TyrestaPage} from '../tyresta/tyresta';

@NgModule({
  declarations: [
    TodayPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayPage),
  ],
})
export class TodayPageModule {}
