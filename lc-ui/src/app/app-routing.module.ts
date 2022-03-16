import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent, AddUserComponent, LandingComponent, WelcomeComponent } from './application/component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./info').then(_ => _.InfoModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./application').then(_ => _.ApplicationModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
