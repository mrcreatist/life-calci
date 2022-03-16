import { Component, OnInit } from '@angular/core';
import { APP } from './constant';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  public appPages = APP;

  ngOnInit() {
  }

}
