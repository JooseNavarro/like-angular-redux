import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT } from '../reducers/index';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styles: []
})

export class HomeComponent {

  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

}


