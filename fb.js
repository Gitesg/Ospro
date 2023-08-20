const express = require("express");


const app=express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/inox.htm")
})

app.listen(3000, () => {
  console.log(`Server is running on port }`);
});
