const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.send('hello everyone, my name is tanjim haider and my server is not running')
})

app.listen(port, () => {
    console.log(`my server is running at http://localhost:${port}`);
});