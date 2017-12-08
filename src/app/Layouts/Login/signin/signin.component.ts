import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-sigin',
    templateUrl: './sigin.html',
    providers: [UserService]
  })

export class SignInComponent {

  public email: string;
  public password: string;
  public user: User;
  public correo;
  public contrasena;

  constructor (
    private _userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    console.log('Estoy en el maldito constructor');
    this.user = new User();
  }

  public onSubmit () {
    console.log('Hola gola gola');
    console.log(`El correo es: ${this.correo}`);
    console.log(`El correo es: ${this.contrasena}`);
    this._userService.signup(this.correo, this.contrasena, true)
    .then((resolve) => {
      this._userService.saveLogin(resolve);
      this.openSnackBar('Logged user.');
      this.router.navigate(['/']);
    }).catch((reason => {
      this.openSnackBar(reason);
      console.log(JSON.parse(reason._body).message);
    }));
  }

  openSnackBar(text: string) {
    this.snackbar.open(text, 'Cerrar', {
      duration: 3000
    });  }
}
