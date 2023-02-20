const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/truthfalsy.html");
});
/**
 * this function will display that the value is truth or not
 */
app.post("/truthfalse", (req, res) => {
    let { variable } = req.body;
    let checkValue = Boolean(variable);
    if (checkValue) {
        return res.send("the value is truth");
    } else {
        return res.send("the value is false");
    }
});
/**
 * this will run file on port 3000
 */
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
