import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../../../Services/news.service';
import { MfbButton } from 'app/Componentes/ng-floating-button';
import { AuthService } from '../../../../Services/auth.service';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css'],
  providers: [NewsService]
  })

export class NoticiasComponent {
  public nombre_component = 'Componente Noticias';
  public config;
  public noticias;
  public admin = false;

  public buttons: Array<MfbButton> = [
  {
    iconClass: 'fa fa-newspaper-o',
    label: 'Nueva noticia',
    onClick: () => {}
  },
  {
    iconClass: 'ion-android-person-add',
    label: 'Nueva persona',
    onClick: function () {
        location.href = 'https://www.facebook.com/taha.shahid.969';
    }
  },
  {
    iconClass: 'fa fa-futbol-o',
    label: 'Nuevo partido',
    onClick: function () {
        location.href = 'https://www.linkedin.com/in/taha-shahid-55ab2243';
    }
  }];

  constructor(
        private _newsService: NewsService,
        private router: Router,
        private auth: AuthService
    ) {
    this.config = {
        placment: 'br',
        effect: 'mfb-zoomin',
        label: 'main button label',
        iconClass: 'ion-plus-round',
        activeIconClass: 'ion-close-round',
        toggle: 'click',
        buttons: this.buttons
    };

      this.admin = this.auth.authenticated;

    _newsService.getAllNews().then((resolve) => {
      this.noticias = resolve;
    });

    this.buttons[0].onClick = () => {
      this.router.navigate(['Noticias', 'New']);
    };
  }

}
