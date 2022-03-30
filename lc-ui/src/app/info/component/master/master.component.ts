import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP } from '../../../application/constant';
import { StorageService } from '../../../core/service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent {
  constructor(private router: Router, private storage: StorageService) {}

  redirect() {
    this.router.navigateByUrl(
      this.storage.isStorageEmpty() ? APP.welcome.url : APP.home.url
    );
  }
}
