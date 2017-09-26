import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkshopPage } from '../workshop/workshop';
import {TdPage } from '../td/td';
import { RecruitmentPage} from '../recruitment/recruitment';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
td()
{ 
this.navCtrl.push(TdPage);
}
workshops()
{
this.navCtrl.push(WorkshopPage);
}
recruitments()
{
this.navCtrl.push(RecruitmentPage);
}
}
