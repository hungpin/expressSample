const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  res.json({"tilte":"Fuck You"});
});

app.listen(8080);
