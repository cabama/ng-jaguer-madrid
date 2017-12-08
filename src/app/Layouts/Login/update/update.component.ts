import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '../../../Models/user';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './update.html',
  styleUrls: ['./update.css'],
})

export class UpdateUserComponent {

  public user: User;

  constructor(private _userSrv: UserService) {
    this.user = _userSrv.userAuth;
  }

  save () {
    console.log(this.user);
  }

}

