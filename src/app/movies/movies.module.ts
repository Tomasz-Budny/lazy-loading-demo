import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieStartComponent } from './movie-start/movie-start.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, children: [
    { path: '', component: MovieStartComponent },
    { path: ':id', component: MovieComponent },
  ]},
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieStartComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class MoviesModule { }
