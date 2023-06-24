const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/calculate', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / ((height / 100) * (height / 100));
  res.render('result', { bmi: bmi.toFixed(1) });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
