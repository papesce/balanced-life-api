/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
  const routineService = app.service('routine');
  


  routineService.get('59e4c109c1d9dcfb4e7c31b9').then( 
      (res) => {
        logger.info('resource found');
      }
    );

});


