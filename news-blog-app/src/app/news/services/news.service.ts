import { HttpClient } from '@angular/common/http';
import { News } from './../models/news';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	constructor(private http: HttpClient) { }

	fetch(): Observable<News[]> {
		return this.http.get<News[]>('https://api.spaceflightnewsapi.net/v3/articles');
	}

	getById(id: string): Observable<News> {
		return this.http.get<News>(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
	}
}