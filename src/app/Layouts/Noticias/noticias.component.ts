import {Component} from '@angular/core';
import { NewsService } from '../../Services/news.service';
import { MfbButton } from 'app/Componentes/ng-floating-button';



@Component({
    selector: 'app-noticias',
    templateUrl: './view/noticias.html',
    styleUrls: ['./view/noticias.css'],
    providers: [NewsService]
  })
export class NoticiasComponent {
    public nombre_component = 'Componente Noticias';
    public config;
    public noticias;

    public buttons: Array<MfbButton> = [
    {
        iconClass: 'fa fa-newspaper-o',
        label: 'Nueva noticia',
        onClick: function () {
            location.href = 'https://github.com/tahashahid';
        }
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

    constructor(private _newsService: NewsService) {

        this.config = {
            placment: 'br',
            effect: 'mfb-zoomin',
            label: 'main button label',
            iconClass: 'ion-plus-round',
            activeIconClass: 'ion-close-round',
            toggle: 'click',
            buttons: this.buttons
        };

        _newsService.getAllNews().then((resolve) => {
            this.noticias = resolve;
        });
    }
}
