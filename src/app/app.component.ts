import { Component } from '@angular/core';
import {AuthService} from 'app/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jaguer Package!';
  constructor (private auth: AuthService) {}
}
