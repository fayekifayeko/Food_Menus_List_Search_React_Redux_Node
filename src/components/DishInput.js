import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DishInput extends Component {
  constructor(props) {
    super(props);

    this.onAddDishClick = this.onAddDishClick.bind(this);
  }

  onAddDishClick() {
    const nameElement = document.getElementById('name');
    const typeElement = document.getElementById('type');
    const dayElement = document.getElementById('day');
    this.props.addDish({
      name: nameElement.value,
      type: typeElement.value,
      day: dayElement.value,
    });

    nameElement.value = '';
    typeElement.value = '';
    dayElement.value = '';

    nameElement.focus();
  }

  componentDidMount() {
    document.getElementById('name').focus();
  }

  render() {
    return (
      <div>
        <input className="form-control" id="name" type="text" placeholder="Dish name" />
        <input className="form-control" id="type" type="text" placeholder="Dish Type" />
        <select className="form-control" id="day">
        <option value="Not_SET"> </option>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
</select>
        <button className="form-control btn btn-success" onClick={this.onAddDishClick}>Add Dish</button>
      </div>
    );
  }
}

DishInput.propTypes = {
  addDish: PropTypes.func.isRequired
};

export default DishInput;
