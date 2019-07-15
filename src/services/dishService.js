export class DishService {
    static addDish(dish) {
        return fetch('http://localhost:4444/dishes', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(dish)
  }).then(function(response) {
    return response.json();
  });
}

static  deleteDish(dish) {
    return fetch(`http://localhost:4444/dishes/${dish.id}`, {
        method: 'delete',
    }).then(function(response) {
        return dish.id;
    });
}

static getAllDishes() {
    return fetch(`http://localhost:4444/dishes`, {
        method: 'get',
    }).then(function(response) {
        return response.json();
    });
}

}