const App = require('../App')
require('dotenv').config();
require('dot')

const port = 6000;

// var options = {
//   customCss: '.swagger-ui .topbar { display: none }'
// };

// App.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
 

App.app.listen(port, () => {
    console.log("server is running on " + port);
})