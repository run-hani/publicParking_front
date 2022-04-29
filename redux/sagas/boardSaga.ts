import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { boardActions } from '../reducers/boardReducer.ts';
import { postAddApi, postEditApi, postDelApi } from '../api/boardApi.ts'

export interface PostType {
  type: string;
  payload: {
    _id : string;
    areaName: string;
    parkingName: string;
    divisionCount: string;
    charge: string;
    adressLotNumber: string;
    adressRoadName: string;
    operDay: string;
  }
}

interface PostSuccessType{
  type: string;
  payload: {
    success: string
  }
}

function* postAdd(post: PostType){
  try{
    alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(post))
    const response : PostSuccessType = yield postAddApi(post.payload)
    yield put(boardActions.postAddSuccess(response))
  }catch(error){
    alert('진행 3: saga내부 join 실패  ')
    yield put(boardActions.postAddFailure(error))
  }
}

export function* watchPostAdd(){
  // alert('진행 2.5')
  yield takeLatest(boardActions.postAddRequest, postAdd)
}

function* postEdit(post: PostType){
  try{
    const response : PostSuccessType = yield postEditApi(post.payload)
    yield put(boardActions.postEditSuccess(response))
  }catch(error){
    yield put(boardActions.postEditFailure(error))
  }
}
export function* watchPostEdit(){
  yield takeLatest(boardActions.postEditRequest, postEdit)
}

function* postDel(){
  try{
    const response : PostSuccessType = yield postDelApi()
    yield put(boardActions.delUserSuccess(response))
  }catch(error){
    console.log(error)
  }
}
export function* watchPostDel(){
  yield takeLatest(boardActions.postDelRequest, postDel)
}
