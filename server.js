const express = require("express");

const app = express();

const about = require("./routes/api/about");
const contact = require("./routes/api/contact");
const portfolio = require("./routes/api/portfolio");

//use routes
app.use("/api/about", about);
app.use("/api/contact", contact);
app.use("/api/portfolio", portfolio);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server running on " + port));
