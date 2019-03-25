const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  res.json({"tilte":"Fuck You"});
});
//pull request
app.listen(8080);
