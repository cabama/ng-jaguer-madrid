import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../../../Services/news.service';

@Component({
  selector: 'app-noticias-detalle',
  templateUrl: './noticias_detalle.html',
  styleUrls: ['./noticias_detalle.css'],
  providers: [NewsService]
  })

export class NoticiasDetalleComponent implements OnInit, OnDestroy {
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
    this.sub = this.route.params.subscribe( (params) => {
      const id =  params['id']; // (+) converts string 'id' to a number
      console.log(id);
      this._newsService.getNews(id)
      .then((value) => {
        this.noticia = value;
        console.log('estoy en el then del promise');
        console.log(this.noticia);
      })
      .catch((reason) => {
        console.log(reason);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
