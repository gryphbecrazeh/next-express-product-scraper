const express = require("express");
const next = require("next");
const config = require("config");
const mongoose = require("mongoose");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Express Parse Middleware
	server.use(express.json());

	// DB Config
	const db = config.get("mongoURI");

	// Connect to Mongo
	mongoose
		.connect(db, { useNewUrlParser: true, useCreateIndex: true })
		.then(() => console.log("MongoDB Connected..."))
		.catch(err => console.log(err));

	// Scrape
	// const http = require("http");
	// const https = require("https");
	// const htmlparser = require("htmlparser2");
	// Use Routes
	server.use("/fetch", require("./routes/api/fetch"));
	server.all("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
