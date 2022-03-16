import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes = [{
  path: '',
  component: InfoComponent
}];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
