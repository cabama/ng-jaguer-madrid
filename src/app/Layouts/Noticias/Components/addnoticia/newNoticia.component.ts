import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../../Services/news.service';

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

    constructor(
        private route: ActivatedRoute,
        private _newsService: NewsService
    ) {}

    ngOnInit() {

    }

}
