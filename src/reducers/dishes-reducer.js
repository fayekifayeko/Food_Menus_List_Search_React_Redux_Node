import * as types from '../constants/dishes-constants';
export default (state = [], action) => {
  switch (action.type) {
      case types.ADD_DISH_SUCCESS:
        return [...state, Object.assign({}, action.dish)];
        case types.GET_ALL_DISHES_SUCCESS:
        return [...state, ...action.dishes];
        case types.DELETE_DISH_SUCCESS:
        return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
