const express = require("express");
const bodyParser = require("body-parser")
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config = require("./config/config")
const path = require("path")


const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, `./public`)));


app.use("/v1", routes)
app.use((req, res, next) => {
    next(new error("Route no Found!"))
})

app.listen(config.port, () => {
    console.log(`server listning port number ${config.port}!`);
})