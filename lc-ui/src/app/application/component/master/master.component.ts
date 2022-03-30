import { Component, OnInit } from '@angular/core';
import { APP } from '../../constant';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  public appPages = [];

  ngOnInit() {
    Object.keys(APP).forEach((key) => this.appPages.push(APP[key]));
  }
}
