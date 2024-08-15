const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

// NORMAL way
// async function connectToDB() {
// 	try {
// 		if (NODE_ENV == "development") {
// 			await mongoose.connect(ATLAS_DB_URL);
// 		}
// 	} catch (error) {
// 		console.log("Unable to connect to the DB Server");
// 		console.log(error);
// 	}
// }

// Using SingleTon Pattern [makes sure that only one instace of db connection exists as multiple TCP connections or frequent TCP connection requests are costly and makes the server overburdened ]
let instance;

class DBConnection {
	#isConnected;
	constructor(db_uri) {
		if (instance) {
			// if the instance varialbe already has a value
			throw new Error("Only one DB connection can exist");
		}

		this.uri = db_uri;
		instance = this;
		this.#isConnected = false;
	}

	async connect() {
		if (this.#isConnected) {
			throw new Error("DB is already connected");
		}

		if (NODE_ENV === "development") {
			await mongoose.connect(ATLAS_DB_URL);
			console.log("DB connected");
			this.#isConnected = true;
		}
	}

	async disconnect() {
		this.#isConnected = false;
	}
}

const db = Object.freeze(new DBConnection());

module.exports = db;
