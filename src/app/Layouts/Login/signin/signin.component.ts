import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/user.service';
import { Router } from '@angular/router';

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

  constructor ( private _userService: UserService, private router: Router ) {
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
        this.router.navigate(['/']);
    }).catch((reason => {
        console.log(JSON.parse(reason._body).message);
    }));
  }
}
