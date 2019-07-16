export const initialState = {
  mainPosts:[
    {
      content:'',
      createdAt:new Date(),
      User:{
        id:1,
        nickname:"GeonilJang",
      },
      content:"welcome",
      img:'',
    },
  ], //state <-- 이거를 어떻게 바꿀지 정하는게 reducer
  imagePath:[],
}

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
  type:ADD_POST,
}

const addDummy = {
  type:ADD_DUMMY,
  data:{
    content:'Hello',
    UserId:1,
    User:{
      nickname:"GeonilJang"
    }
  }
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      return {
        ...state,
      }
    }
    case ADD_DUMMY:{
      return {
        ...state,
        mainPosts:[action.data, ...state.mainPosts],
      }
    }
    default:{
      return {
        ...state,
      }
    }
  }
}

export default reducer;


/*
r
  setState((prevState) => {
    return {
    field: {...prevState.field}
  }
})





*/
