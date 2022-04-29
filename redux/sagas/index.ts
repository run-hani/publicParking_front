import {all} from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout, watchDelUser } from './userSaga.ts'
import { watchPostAdd, watchPostEdit, watchPostDel } from './boardSaga.ts'

export default function* rootSaga() {
    yield all([
      watchJoin(),
      watchLogin(),
      watchLogout(),
      watchDelUser(),
      watchPostAdd(),
      watchPostEdit(),
      watchPostDel(),
    ])
}
