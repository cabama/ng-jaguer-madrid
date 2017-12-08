import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './update.html',
  styleUrls: ['./update.css'],
  providers: [AuthService]
})

export class UpdateUserComponent {

  public user: User;

  constructor(private _auth: AuthService, private router: Router) {
    this.user = _auth.userAuth;
  }

  save () {
    console.log(this.user);
  }

}

