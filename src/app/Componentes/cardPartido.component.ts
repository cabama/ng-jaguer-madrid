import {Component, Input} from '@angular/core';

type Partido = {
    local:string
    stadium: string
    visitor:string
    date: string
    time: string
}

@Component({
    selector: 'app-card-partido',
    templateUrl: './view/cardPartido/cardPartido.html',
    styleUrls: ['./view/cardPartido/cardPartido.css']
  })

export class cardPartidoComponent {
    @Input() pachanga: Partido;

    // @Input() description: String;
    
    public local:string = 'Jaguer Meister C.F.';
    public stadium: string = 'Guapitous Stadium';
    public visitor:string = 'Jubiletas Team S.A.';
    public date: string = '21 Octubre 2017';
    public time: string = '16:00';

    
    ngOnInit() { 
        this.local = this.pachanga.local
        this.visitor = this.pachanga.visitor
        this.stadium = this.pachanga.stadium
        this.date = this.pachanga.date
        this.time = this.pachanga.time
    }


}
