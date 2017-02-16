import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface State {
    isLoggedIn: boolean;
};

const defaultState: State = {
    isLoggedIn: false
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private store = _store;
    changes = this.store.asObservable().distinctUntilChanged();

    setState(state: State) {
        this.store.next(state);
    }

    getState(): State {
        return this.store.value;
    }

    purge() {
        this.store.next(defaultState);
    }
};
