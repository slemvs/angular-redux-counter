import { AppState } from 'app/store/app-state';
import { INCREMENT, DECREMENT } from 'app/actions/counter-action-creators';
import { Action, Reducer } from "redux";

let initialState: AppState = { counter: 0 };

export const counterReducer: Reducer<AppState> =
    (state: AppState = initialState, action: Action): AppState => {
        switch (action.type) {
            case INCREMENT:
                return Object.assign({}, state, { counter: state.counter + 1 });
            case DECREMENT:
                return Object.assign({}, state, { counter: state.counter - 1 });
            default:
                return state;
        }
    };