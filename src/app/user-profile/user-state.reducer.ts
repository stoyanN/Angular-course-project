import { createReducer, on } from '@ngrx/store';
import { logInUser, logOutUser } from './user-state.actions';

export const userState = !!localStorage.getItem('email');


const _logUser = createReducer(
    userState,
    on(logInUser, (state) => true),
    on(logOutUser, (state) => false)
);

export function loginUser(state: any, action: any) {
    return _logUser(state, action);
}