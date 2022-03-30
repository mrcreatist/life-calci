import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  AddUserComponent,
  LandingComponent,
  MasterComponent,
  WelcomeComponent,
} from './component';
import { component, service } from './declaration';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'home',
        component: LandingComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'add',
        component: AddUserComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: component,
  providers: service,
})
export class ApplicationModule {}
