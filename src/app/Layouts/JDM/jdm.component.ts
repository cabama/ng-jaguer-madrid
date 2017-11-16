import {Component} from '@angular/core';
import { JDMService } from '../../Services/jdm.service';

@Component({
    selector: 'app-clasificacion',
    templateUrl: './view/clasificacion.html',
    styleUrls: ['./view/clasificacion.css'],
    providers: [JDMService]

  })

export class JDMComponent {

    public clasificaciones: any;

    constructor(private _newsService: JDMService) {

        this.clasificaciones = _newsService.getRangkingStorage();

        _newsService.getRanking().then((resolve) => {
            this.clasificaciones = resolve;
            _newsService.setRankingStorage(resolve);
        });
    }
}
