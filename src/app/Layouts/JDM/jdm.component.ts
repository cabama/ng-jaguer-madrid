import { Component, ViewChild} from '@angular/core';
import { JDMService } from '../../Services/jdm.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

type clasificion = {
    Posicion: number,
    Nombre_equipo: string,
    Puntos: number,
    Partidos_ganados: number,
    Partidos_empatados: number,
    Partidos_perdidos: number,
    Goles_favor: number,
    Goles_contra: number
};

@Component({
    selector: 'app-clasificacion',
    templateUrl: './view/clasificacion.html',
    styleUrls: ['./view/clasificacion.css'],
    providers: [JDMService]
  })

  export class JDMComponent {
    @ViewChild (MatSort) sort: MatSort;

    public clasificaciones: any;
    public dataSource: MatTableDataSource<clasificion>;

    constructor(private _newsService: JDMService) {    }


    ngAfterViewInit () {

        this.clasificaciones = this._newsService.getRangkingStorage();

        this._newsService.getRanking().then((resolve) => {
            this.clasificaciones = resolve as clasificion;
            this._newsService.setRankingStorage(resolve);
            this.dataSource = new MatTableDataSource(resolve);
            return resolve;
        }).then( (resolve) => {
            console.log('hago el sort')
            console.log(resolve)
            this.dataSource.sort = this.sort;
            }
        );
    }

}
