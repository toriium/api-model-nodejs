const express = require("express");
const app = express();
const {findBookByName} = require("./src/services/bookService");

// simple route
app.get("/", (req, res) => {

    let name = req.query.name
    let bookName = findBookByName(name)
    res.json({"name": bookName});
});

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});