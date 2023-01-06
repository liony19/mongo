const app = require('./app');
const Loaders = require('./loaders/index');

Loaders.start();

app.listen(7777, () => console.log('Server is running'));