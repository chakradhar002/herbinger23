

const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("employee/getlistofemployess", {
        viewTitle: "Insert Employee"
    });
});