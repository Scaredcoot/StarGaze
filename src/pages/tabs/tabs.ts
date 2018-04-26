import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LogInPage } from '../log-in/log-in';
import { TodayPage } from '../today/today';
import { MenuPage } from '../menu/menu';
import { PlacesPage} from '../places/places';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LogInPage;
  tab2Root = TodayPage;
  tab3Root = MenuPage;
  tab4Root = PlacesPage;

  constructor() {

  }
}
