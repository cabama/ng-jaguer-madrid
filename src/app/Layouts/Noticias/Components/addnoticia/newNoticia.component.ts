import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../../Services/news.service';
import { SharedService } from '../../../../Services/share.service';

@Component({
    selector: 'app-new-news',
    templateUrl: './newNoticia.html',
    styleUrls: ['./newNoticia.css'],
    providers: [NewsService]
})

export class NewNewsComponent implements OnInit {
    public id: string;
    public sub: any;
    public noticia = {
        title: '',
        body: ''
    };
    public token: string;

    constructor(
        private route: ActivatedRoute,
        private _newsService: NewsService,
        private shared: SharedService
    ) {}

    ngOnInit() {
    //    console.log(this.shared.token);
    }

    onSubmit () {

        console.log('Estoy en onSubmit');
        console.log(this.noticia.title);
        console.log(this.noticia.body);
        console.log(this.shared.token);
        this._newsService.createNew(this.shared.token, this.noticia)
        .then(response => {
            console.log(response);
        }).catch(reason => {
            console.log(reason);
        });
    }

}
