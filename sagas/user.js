import {all, fork, put, takeLatest, call, take, delay} from 'redux-saga/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../reducers/user';
import axios from 'axios';

const dummy = {
  nickname:"GEONIL",
  Post:[],
  Followings:[],
  Followers:[],
  signUpData:{}
}


//이벤트 리스너
function* watchLogin(){
  yield takeLatest(LOG_IN_REQUEST, login);
}

function loginAPI(){
  //서버에 요청을 보내는 부분
}

//핸들러
function* login(){
  try{
    //yield call(loginAPI);
    yield delay(3000)
    yield put({// dispatch
      type:LOG_IN_SUCCESS,
      data:dummy
    })
  }catch(e){
    console.error(e);
    yield put({
      type:LOG_IN_FAILURE
    });
  }
}



function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function signUpAPI(){

}

function* signUp(){
  try {
    yield call(signUpAPI);
    yield put({
      type:SIGN_UP_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type:SIGN_UP_FAILURE
    })
  }
}

//이벤트 등록
export default function* userSaga(){
  yield all([
    fork(watchLogin),
    fork(watchSignUp)
  ])
}
