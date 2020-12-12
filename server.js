const express = require('express');

const app = express();

app.use(express.static('./dist/Angular-App'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/Angular-App/' }),
);

app.listen(process.env.PORT || 8080);