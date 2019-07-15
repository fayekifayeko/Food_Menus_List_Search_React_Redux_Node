import * as types from '../constants/dishes-constants';
import {DishService} from '../services/dishService';

export const addDishSuccess = (dish) => {
  return {
    type: types.ADD_DISH_SUCCESS,
    dish
  };
};

export const deleteDishSuccess = (id) => {
  return {
    type: types.DELETE_DISH_SUCCESS,
    id
  };
};

export const getAllDishesSuccess = (dishes) => {
  return {
    type: types.GET_ALL_DISHES_SUCCESS,
    dishes
  };
};

export const addDish = (dish) => {
  return (dispatch) => {
    DishService.addDish(dish).then(res => dispatch(addDishSuccess(res.dish)));
  }
};

export const getAllDishes = () => {
  return (dispatch) => {
    DishService.getAllDishes().then(res => dispatch(getAllDishesSuccess(res.dishes)));
  }
};

export const deleteDish = (dish) => {
  return (dispatch) => {
    DishService.deleteDish(dish).then(res =>{
      dispatch(deleteDishSuccess(res))
    });
  }
};


