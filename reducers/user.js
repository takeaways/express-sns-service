export const initialState = {
  isLoggedIn:false,
  user:null
}

const dummy = {
  nickname:"GEONIL",
  Post:[],
  Followings:[],
  Followers:[],
  signUpData:{}
}

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

const loginAction = {
  type:LOG_IN,
  data:{
    nickname:'GeonilJang'
  }
};

const logoutAction = {
  type:LOG_OUT,
}

export const signUpAction = (data) =>  {
  return {
    type:SIGN_UP,
    data:data,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN:{
      return {
        ...state,
        isLoggedIn:true,
        user:action.data,
      }
    }
    case LOG_OUT:{
      return {
        ...state,
        isLoggedIn:false,
        user:null,
      }
    }
    case SIGN_UP:{
      return {
        ...state,
        signUpData:action.data
      }
    }
    default:{
      return {...state}
    }
  }
};

export default reducer;
