const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// app.set('view engine', 'html');
// app.set('views', __dirname + '/views/');
// app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(require('./router'));

const Port = process.env.Port || 9000;

app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
