const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];

//Enabling Console Logging
allowedTransports.push(
	new winston.transports.Console({
		//Formatting for Console logging
		format: winston.format.combine(
			winston.format.colorize(),
			//First arg to the combine method is defining how we want the timestamp to come up
			winston.format.timestamp({
				format: "YYYY-MM-DD HH:mm:ss",
			}),
			//second arg to the combine method defines what exactly going to be printed in the log
			winston.format.printf(
				log => `${log.timestamp} [${log.level}]: ${log.message}`
			)
		),
	})
);

//Enabling Database (Mongo) logging
allowedTransports.push(
	new winston.transports.MongoDB({
		level: "error", //only error logs are gonna be saved to db
		db: LOG_DB_URL,
		collection: "logs",
	})
);

//Enabling File logging
allowedTransports.push(
	new winston.transports.File({
		filename: `app.log`,
	})
);

const logger = winston.createLogger({
	//Default formatting
	format: winston.format.combine(
		//First arg to the combine method is defining how we want the timestamp to come up
		winston.format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		//second arg to the combine method defines what exactly going to be printed in the log
		winston.format.printf(
			log =>
				`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
		)
	),
	transports: allowedTransports,
});

module.exports = logger;
