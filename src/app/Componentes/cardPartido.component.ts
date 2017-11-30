import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-card-partido',
    templateUrl: './view/cardPartido/cardPartido.html',
    styleUrls: ['./view/cardPartido/cardPartido.css']
  })

export class CardPartidoComponent implements OnInit {
    @Input() pachanga;
    // @Input() description: String;
    public Titulo: string;
    public Equipo_visitante: string;
    public Equipo_local: string;
    public Campo: string;
    public Fecha: string;
    public Hora: string;
    public Resultado1: string;
    public Resultado2: string;

    ngOnInit() {
        this.Equipo_visitante = this.pachanga.Equipo_visitante;
        this.Equipo_local = this.pachanga.Equipo_local;
        this.Campo = this.pachanga.Campo;
        this.Fecha = this.pachanga.Fecha;
        this.Hora = this.pachanga.Hora;
        this.Resultado1 = this.pachanga.ResultDisabled
            ? '-'
            : this.pachanga.Resultado1;
        this.Resultado2 = this.pachanga.ResultDisabled
            ? '-'
            : this.pachanga.Resultado2;
    }


}
