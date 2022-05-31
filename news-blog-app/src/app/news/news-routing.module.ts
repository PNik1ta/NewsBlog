import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: '', component: NewsPageComponent,
	},
	{
		path: ':id', component: NewsDetailComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NewsRoutingModule {

}