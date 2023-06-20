const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/menuRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("restaurantDB"));
app.use(
    session({
        secret: "restaurantDB",
        saveUninitialized: true,
        resave: true,
    })
);

app.use("/", routes);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
