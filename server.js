const express = require("express");
const { engine } = require("express-handlebars");
const session = require("express-session");

// =============================================================
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// =============================================================
// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
  })
);

// =============================================================
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================================================
// Serve public static folder
app.use(express.static("public"));

// =============================================================
// Routes that the JS will be using
app.use(require("./routes"));

// =============================================================
// Starts the server to begin listening
app.listen(PORT, async () => {
  console.log("App listening on PORT " + PORT);
});
