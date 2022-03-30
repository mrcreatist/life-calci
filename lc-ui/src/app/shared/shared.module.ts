import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { service } from './declaration';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: service
})
export class SharedModule { }
