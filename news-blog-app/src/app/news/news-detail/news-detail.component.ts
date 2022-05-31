import { NewsService } from './../services/news.service';
import { News } from './../models/news';
import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

	news$!: Observable<News>;

	constructor(private newsService: NewsService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.news$ = this.route.params.
			pipe(switchMap((params: Params) => {
				return this.newsService.getById(params['id'])
			}));
	}

}
