import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { JokeComponent } from './joke/joke.component';
import { JokeResolverService } from './joke-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'joke/:category',
    component: JokeComponent,
    resolve: {
      joke: JokeResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
