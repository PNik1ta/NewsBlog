import { RouterModule } from '@angular/router';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';



@NgModule({
	declarations: [
		NewsPageComponent,
		NewsDetailComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		NewsRoutingModule
	],
	exports: [
		NewsPageComponent,
		RouterModule
	]
})
export class NewsModule { }
