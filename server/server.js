const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Routers
const getErrorsRouter = require('./routers/getErrors.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Endpoints
app.use('/api/getErrors', getErrorsRouter);

app.use(express.static('build'));

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
