import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, children: [
    { path: ':id', component: MovieComponent }
  ]},
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class MoviesModule { }
