import React from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish';
import {Table} from 'react-bootstrap';
import {Component} from 'react';

  class DishList extends Component {
  constructor(props) {
    super(props);

    this.onDeleteDishClick = this.onDeleteDishClick.bind(this);
  }

  onDeleteDishClick(dish) {
    this.props.deleteDish(dish);
  }
  render() {
    return (
      <div>
        <hr/>
        <h4>Dishes:</h4>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>Dish Name</th>
        <th>Dish Type</th>
        <th>Dish Day</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {this.props.dishes.map((dish, index) =>
          <Dish key={index} dish={dish} deleteDish={this.onDeleteDishClick} />
        )}
         </tbody>
  </Table>
      </div>
    );
  }
};

DishList.propTypes = {
  dishes: PropTypes.array.isRequired,
  deleteDish: PropTypes.any.isRequired,
};

export default DishList;
