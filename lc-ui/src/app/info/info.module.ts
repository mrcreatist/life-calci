import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../core';
import { component } from './declaration';
import { MasterComponent } from './component';

const routes = [
  {
    path: '',
    component: MasterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
  declarations: component,
})
export class InfoModule {}
