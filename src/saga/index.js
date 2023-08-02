import {all} from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { userWatcher } from './userSaga'


//объеденение вортчеров
export function* rootWathcer(){
    yield all([countWatcher(), userWatcher()])
}