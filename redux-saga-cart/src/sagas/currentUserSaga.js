import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    GET_CURRENT_USER_INFO, // get user info then call API
    setCurrentUser 
} from './../actions'


export function* currentUserSaga () {
    const { id } = yield take(GET_CURRENT_USER_INFO);
    const response = yield call(fetch, `http://localhost:8081/user/${id}`);
    const data = yield apply(response, response.json); // need response for this to be properly set
    // console.info("ID:", id);
    // console.info("Data:", data);
    yield put(setCurrentUser(data)); // displays returned data in ui
}