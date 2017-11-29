import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

type Partido = {
    Equipo_local: string
    Equipo_visitante: string
    Campo: string
    Fecha: string
    Hora: string
};

@Component({
    selector: 'app-card-partido',
    templateUrl: './view/cardPartido/cardPartido.html',
    styleUrls: ['./view/cardPartido/cardPartido.css']
  })

export class CardPartidoComponent implements OnInit {
    @Input() pachanga;
    // @Input() description: String;
    public Equipo_visitante: string;
    public Equipo_local: string;
    public Campo: string;
    public Fecha: string;
    public Hora: string;

    ngOnInit() {
        console.log(this.pachanga);
        this.Equipo_visitante = this.pachanga.Equipo_visitante;
        this.Equipo_local = this.pachanga.Equipo_local;
        this.Campo = this.pachanga.Campo;
        this.Fecha = this.pachanga.Fecha;
        this.Hora = this.pachanga.Hora;
    }


}
