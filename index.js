const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
app.get("/api2/v1", (req, res) => {

    fetch('http://node-app:3000/api/v1')
        .then(res2 => res2.json())
        .then(json => res.json({ "service": 'v2', api1: json }));


})

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`listening on port ${port}`) })