const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());

app.use('/notes', routes);

app.listen(3333, () => console.log('listening to port 3333'));