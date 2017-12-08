import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-signed',
  templateUrl: './signed.html',
  styleUrls: ['./signed.css'],
})

export class SignedComponent {

  public user: User;

  constructor(private _userService: UserService, private router: Router) {
    console.log('Estoy en el maldito constructor');
    this.user = _userService.userAuth;
  }

  logout () {
    alert('Función aun no implementada');
  }

  edit () {
    this.router.navigate(['Login', 'Update']);
  }
}

