import {Component} from '@angular/core';
import { NewsService } from '../../Services/news.service';

@Component({
    selector: 'app-noticias',
    templateUrl: './view/noticias.html',
    styleUrls: ['./view/noticias.css'],
    providers: [NewsService]

  })

export class NoticiasComponent {
    public nombre_component = 'Componente Noticias';
    noticias = [
        {
            id: '26717',
            tittle: 'Jaguers lost again.',
            description: 'Nadie se esperaba esta nueva derrota.'
        },
        {
            id: '267',
            tittle: 'Jaguers Pierden en su inicio de temporada.',
            description: 'Las cervezas del verano no sentaron bien al equipo.'
        }
    ];

    constructor(private _newsService: NewsService) {
        _newsService.getAllNews().then((resolve) => {
            this.noticias = resolve;
        });
    }
}
