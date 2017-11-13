import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './view/login.html',
    styleUrls: ['./view/login.css'],
    providers: [UserService]
  })

export class LoginComponent implements OnInit {

   public email: string;
   public password: string;
   public user: User;
   public correo;
   public contrasena;

    constructor ( private _userService: UserService ) {
        console.log('Estoy en el maldito constructor');
        this.user = new User();
    }

    ngOnInit () {

    }

    public onSubmit () {
        console.log('Hola gola gola');
        console.log(`El correo es: ${this.correo}`);
        console.log(`El correo es: ${this.contrasena}`);
        this._userService.signup(this.email, this.password).toPromise()
        .then ((response) => {
            console.log(response);
        });
    }
}
