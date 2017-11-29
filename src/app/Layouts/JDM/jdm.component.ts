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
  public calendario: any[] = [];
  public resultados: any[] = [];
  public dataSource: MatTableDataSource<clasificion>;

  constructor(private _jdmService: JDMService) {
    this.clasificaciones = this._jdmService.getRangkingStorage();

    this._jdmService.getRanking()
    .then((resolve) => {
      this.clasificaciones = resolve as clasificion;
      this._jdmService.setRankingStorage(resolve);
      this.dataSource = new MatTableDataSource(resolve);
      return resolve;
    })
    .then( (resolve) => {
      this.dataSource.sort = this.sort;
    })
    .catch( reason => {
      console.error('Can\'t get ranking');
    });

    this._jdmService.getCalendar()
     .then(calendario => {
       const now = new Date();
       calendario.forEach( jornada => {
         const jornadaDate = new Date(jornada.Date);
         if (now > jornadaDate) {
           this.calendario.push(jornada);
         } else {
           this.resultados.push(jornada);
         }
       });
       console.log(this.calendario);
       console.log(this.resultados);
     });


  }


}
