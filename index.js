const express = require('express');
const app = express();
app.get('/',(req, res)=>{
  res.json({"tilte":"You are such a whore"});
});
app.listen(8787);
