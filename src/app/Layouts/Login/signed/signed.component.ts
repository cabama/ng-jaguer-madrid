import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signed',
  templateUrl: './signed.html',
  styleUrls: ['./signed.css'],
})

export class SignedComponent {

  public user: User;

  constructor(
    private _userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.user = _userService.userAuth;
  }

  logout () {
    const text = 'Session closed';
    this.snackbar.open(text, 'Cerrar', { duration: 3000 });
    this._userService.logout();
  }

  edit () {
    this.router.navigate(['Login', 'Update']);
  }

}

