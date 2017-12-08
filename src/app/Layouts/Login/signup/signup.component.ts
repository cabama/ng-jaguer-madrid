import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  providers: [AuthService]
})

export class SignUpComponent {

  public user: User;

  constructor(private _auth: AuthService, private router: Router) {
    this.user = new User();
  }

  save () {
    alert('Función aun no implementada');
  }

}

