const express = require('express');
const app = express();
app.get('/',(req, res)=>{
  res.json({"tilte":"Eric is a handsome boy"});
});
app.listen(8080);
