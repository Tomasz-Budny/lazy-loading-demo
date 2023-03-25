import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  fakeHttp$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.fakeHttp$ = this.route.params.pipe(switchMap(params => {
      let id = +params['id'];
      return of(id); // fake http request z danymi z params
    }));
  }

}
