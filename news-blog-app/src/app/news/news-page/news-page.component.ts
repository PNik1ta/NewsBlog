import { News } from './../models/news';
import { filter, map, Observable } from 'rxjs';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

	news$!: Observable<News[]>;
	news!: News[];
	searchString: string;

	constructor(private newsService: NewsService) {
		this.searchString = '';
	}

	ngOnInit(): void {
		this.news$ = this.newsService.fetch();
	}

	onUpdateSearch(event: any) {
		this.searchString = event;
		this.news$ = this.newsService.fetch().pipe(map(news => news.filter(item => item.title.includes(this.searchString) || item.summary.includes(this.searchString))));
	}

}
