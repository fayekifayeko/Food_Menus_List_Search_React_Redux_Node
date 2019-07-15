import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dishesActions from '../actions/dishes-actions';
import DishList from './DishList';
import DishInput from './DishInput';

class DishContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.actions.getAllDishes();
  }

  updateSearch(event) {
    this.setState({search : event.target.value});
  };

  render() {
    const {dishes} = this.props;
    const filteredDishes = this.state.search.length > 0 ? dishes.filter(
      (dish) => {
        return dish.name.indexOf(this.state.search) !== -1
      }
    )  : dishes;
    return (
      <div>
        <DishInput addDish={this.props.actions.addDish} />
        <hr />
        {filteredDishes.length > 0 &&
         
         <div>
           <DishList dishes={filteredDishes} deleteDish={this.props.actions.deleteDish}/>
          </div>
         }
        <input className="form-control" value={this.state.search} placeholder="Search by dish name" onChange={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

DishContainer.propTypes = {
  dishes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    dishes: state.dishes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dishesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishContainer);
