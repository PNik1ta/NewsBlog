import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		LoaderComponent,
		SearchComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		LoaderComponent,
		SearchComponent
	]
})
export class SharedModule { }
