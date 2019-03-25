const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  res.json({"tilte":"Sample Express"});
});

app.listen(8080);
