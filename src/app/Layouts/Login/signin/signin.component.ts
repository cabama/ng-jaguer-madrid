import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

class Login {
  email: string;
  password: string;
}

@Component({
    selector: 'app-sigin',
    templateUrl: './sigin.html',
    styleUrls: ['./signin.css'],
    providers: [UserService]
  })

export class SignInComponent {

  private login: Login;

  constructor (
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.login = new Login();
  }

  /*
  public ngOnInit() {
    const redirect = this.route
    .queryParamMap
    .map(params => params.get('restrictedAccess') || false);
    if (redirect) {
      this.openSnackBar('Need login to access.');
    }
  }
  */

  public onLogin () {
    console.log('Hola gola gola');
    console.log(`El correo es: ${this.login.email}`);
    console.log(`El correo es: ${this.login.password}`);
    this._userService.signup(this.login.email, this.login.password, true)
    .then((resolve) => {
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
