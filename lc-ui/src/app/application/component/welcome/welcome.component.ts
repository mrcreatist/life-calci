/* eslint-disable space-before-function-paren */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../model';
import { AppService } from '../../service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor (
    private app: AppService,
    private router: Router
  ) { }

  getData(data: UserModel) {
    this.app.addUser(data);
    this.router.navigateByUrl('/app/home');
  }

}
