const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Routers
const getErrorsRouter = require('./routers/getErrors.router');
const getSingleErrorRouter = require('./routers/getSingleError.router');
const addErrorRouter = require('./routers/addError.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Endpoints
app.use('/api/getErrors', getErrorsRouter);
app.use('/api/getSingleError', getSingleErrorRouter);
app.use('/api/addError', addErrorRouter);

app.use(express.static('build'));

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
