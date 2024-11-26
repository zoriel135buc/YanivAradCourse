const initialState = {
  cars: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD': {
      return {...state, cars: action.payload}
    }
    case 'ADD': {

    }
    case 'DELETE': {

    }
    default:
      return state;
  }
};

export default carsReducer;
