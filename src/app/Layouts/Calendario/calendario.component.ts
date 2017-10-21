import {Component} from '@angular/core';

type Partido = {
    local:string
    stadium: string
    visitor:string
    date: string
    time: string
}

@Component({
    selector: 'app-calendario',
    templateUrl: './view/calendario.html',
    styleUrls: ['./view/calendario.css']
  })

export class CalendarioComponent {

    pachanga:Partido = {
        local: 'Jaguer Meister C.F.',
        visitor: 'Spider Cerdos S.A',
        stadium: 'Guapitous Stadium',
        date: '25 Diciembre FunFun',
        time: '19:40'
    }

}