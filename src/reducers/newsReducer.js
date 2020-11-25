const INITIAL_STATE = {
  allNews: [],
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_NEWS':
      return state.allNews;
    case 'CREATE_NEWS':
      return state.allNews;
    default:
      return state;
  }
};

export default newsReducer;

// const newsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     // case SIGN_IN:
//     //   return { ...state, isSignedIn: true, userId: action.payload };
//     // case SIGN_OUT:
//     //   return { ...state, isSignedIn: false, userId: null };
//     default:
//       return state;
//   }
// };
