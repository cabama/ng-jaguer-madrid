import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-noticia',
    templateUrl: './view/cardNoticia.html',
    styleUrls: ['./view/cardNoticia.css']
  })

export class CardNoticiaComponent {
    @Input() tittle: string;
    @Input() description: String;
}
