const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4444;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let dishes = [];

app.get('/dishes', (req, res) => {
  res.status(200).json({ dishes });
});

app.post('/dishes', (req, res) => {
  const id = req.body.name.toLowerCase().split(' ').join('_');
const dish = {
  id: id,
  name: req.body.name,
  type: req.body.type,
  day: req.body.day
}
dishes.push(dish);
res.status(200).json({ dish });
});

app.delete('/dishes/:id', (req, res) => {
  const id = req.params.id;
  dishes = dishes.filter(item => item.id !== id);
  res.status(200).json({id: id});
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
