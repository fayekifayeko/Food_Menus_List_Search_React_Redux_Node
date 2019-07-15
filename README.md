# Mommes-redux

This is a barebones implementation of Redux with a React app.

## Prerequisites

### Install `node.js` & `npm`.
This can be done in two ways, from the [official site](https://nodejs.org/en/download/) or
with [nvm](https://github.com/creationix/nvm). The recommended way is to use nvm. We provide a `.nvmrc` in this repository so to install
the correct version of `node` just cd into the project directory and from a shell run:
```bash
nvm install
```

This will install the version of node listed in the `.nvmrc` and use it.

### Install dependencies
With `node` & `npm` installed we can install the project dependencies by running

```bash
npm install
```

### Run the application
The app can be started with ```npm start```. This will start a development server on at port 3000.

## The task

This assignment is about creating a food menu for a restaurant.
For simplicity a `menu` is nothing more than a list of `dishes`.

Right now we have a basic application where dishes can only be created with a name.
There's an API to persist the dishes but it is not used from the frontend application.

What we would like is to be able to add more information to dishes besides the name and make requests to our API
to persist, retrieve or delete the items.

### Assignments

All of the client side functionality shall use the `redux` flow. I.e `contants`, `actions` `reducers`

1. Allow for creating menu items which contain more a little more information, they would like to create items with the following information.
```json
{
  "name":  <name_of_food_dish>,
  "type": <type_of_food>,
  "day" <day_pf_the_week>
}
```

Type of the fields are:
* `name` - `String` (required) can be whatever, just not an empty `String`, `null` or `undefined`
* `type` - `String` (required) Type of food, needs to be one of the following values: `meat`, `chicken`, `veg`
* `day` - `String` (required) Which day this dish is available, needs to in the range `monday - sunday`

Example:
```json
{
  "name": "Delicious chicken soup",
  "type": "chicken",
  "day": "monday"
}
```

NOTE! There's no requirement that there's only on dish available on a given day, there can be 1 or 10.

2. List the items

Once we can create items with the new fields we would also like to display them correctly
Update the listing of menu items to include the new fields `type` and `day`. I.e something like

|name | type | day|
|-----|------|----|
|Superdish|chicken|sunday

3. Persist the items

In the folder `api/` there's a simple app with a REST API. It has it's own dependencies which need to be installed using `npm install`.
This app can be started with `npm start` as well. The API will be available on port 4444.

There are 2 endpoints which needs to be implemented
* POST `/dishes` - Doing a HTTP POST to this endpoint should add the dish to the array `dishes` and return the created resource together with a status code of 201.
The created resource should get an `id` property which is the name lowercased and the spaces replaced with underscores.

#### Example request/response:

*Request:*

```
POST /endpoints

{
  "name": "Delicious chicken soup",
  "type": "chicken",
  "day": "monday"
}
```

*Response:*

```
HTTP/1.1 201 CREATED

{
  "id": "delicious_chicken_soup"
  "name": "Delicious chicken soup",
  "type": "chicken",
  "day": "monday"
}
```

* DELETE `/dishes/:id` Sending a delete request to this endpoint should remove the resource by id.

*Request:*

```
DELETE /endpoints/delicious_chicken_soup
```

*Response:*

```
HTTP/1.1 200 OK
```

* GET  `/dishes` is already implemented, it returns a `dishes` collection.

4. Filtering of dishes

There should be a way to only display items which match an entered string. The list of should match on name of dishes and only display those which are considered matchting the filter.
The filtering should be client side. Filtering as you type or by clicking a button is up to you.

5. Deleting dishes

Each dish should be deletable by pressing a button of some sort next to each dish in the list.


## Deliver

The project shall be delivered as a `zip` archive of the project folder.
*NOTE!* `node_modules` in root directory & api directory shall be excluded.

I should be able to unzip -> npm install -> npm start to run the application

Email me the zip at simon@plug-n-trade.com

## Tips
* Do stuff the 'redux' way
* For doing HTTP requests there's `fetch` check https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* CSS is not important
* API is implemented in `express` https://expressjs.com/en/4x/api.html
* API does not watch changes and needs to be restarted when code has been changed
* There's no need to implement more container components. New components should be presentational.
* Email questions to `simon@plug-n-trade.com`
