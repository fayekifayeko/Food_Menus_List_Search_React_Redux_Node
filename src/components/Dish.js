import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dish extends Component {
  constructor(props) {
    super(props);

    this.onDeleteDishClick = this.onDeleteDishClick.bind(this);
  }

onDeleteDishClick(dish) {
  this.props.deleteDish(dish);
}
render() {
  const {dish} = this.props;
  return (
    <tr>
      <td>{dish.name}</td>
      <td>{dish.type}</td>
      <td>{dish.day}</td>
      <td><span className="glyphicon glyphicon-trash" onClick={()=>this.onDeleteDishClick(dish)}></span></td>
    </tr>
  );
};
}

Dish.propTypes = {
  dish: PropTypes.object.isRequired,
  deleteDish: PropTypes.any.isRequired
};

export default Dish;
