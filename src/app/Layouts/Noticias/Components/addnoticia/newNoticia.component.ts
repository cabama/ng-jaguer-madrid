import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '@services/news.service';
import { SharedService } from '@services/share.service';
import { UserService } from '@services/user.service';
import { User } from '../../../../Models/user';

@Component({
    selector: 'app-new-news',
    templateUrl: './newNoticia.html',
    styleUrls: ['./newNoticia.css'],
    providers: [NewsService]
})

export class NewNewsComponent {
    public id: string;
    public sub: any;
    private user: User;
    public noticia = {
        title: '',
        body: ''
    };

    constructor(
        private route: ActivatedRoute,
        private _newsService: NewsService,
        private _userService: UserService,
        private shared: SharedService
    ) {
        this.user = this._userService.userAuth;
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
