import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, AddUserComponent, LandingComponent, WelcomeComponent } from './component';
import { component, service } from './declaration';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'home',
        component: LandingComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApplicationComponent, ...component],
  providers: service
})
export class ApplicationModule { }
