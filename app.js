const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();
//register a listener
logger.on('messsageLogged', (arg) =>{

    console.log('Listener called', arg)
});
log('message');



