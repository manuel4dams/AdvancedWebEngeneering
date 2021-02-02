// Set up server and database (include here for eager bindings, is not necessary)
require('./config/server');
require('./config/database');

// Include all controllers
require('./controller/home.controller');
require('./controller/foo.controller');
