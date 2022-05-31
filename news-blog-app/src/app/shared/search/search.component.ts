import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@Output() searchEmitter: EventEmitter<string>;

	constructor() {
		this.searchEmitter = new EventEmitter<string>();
	}

	ngOnInit(): void {
	}

	onSearchChange(event: any): void {
		this.searchEmitter.emit(event.target.value);
	}

}
