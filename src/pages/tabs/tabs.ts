import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LogInPage } from '../log-in/log-in';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LogInPage;
  tab2Root = TodayPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
