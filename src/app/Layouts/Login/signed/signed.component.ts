import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-signed',
  templateUrl: './signed.html',
  styleUrls: ['./signed.css'],
  providers: [AuthService]
})

export class SignedComponent {

  public user: User;

  constructor(private _auth: AuthService, private router: Router) {
    console.log('Estoy en el maldito constructor');
    this.user = _auth.userAuth;
  }

  logout () {
    alert('Función aun no implementada');
  }

  edit () {
    alert('Funcion aun no implementada');
  }
}

