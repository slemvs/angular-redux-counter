import { Component, OnInit, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from 'app/store/app-store';
import { AppState } from 'app/store/app-state';
import * as CounterActions from 'app/actions/counter-action-creators';

@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.less']
})
export class CounterComponentComponent implements OnInit {
 
  ngOnInit() {
  }

  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

}


