const express = require('express');
const app = express();

var timestamp = new Date().getTime();

const data = {
    Vendor: "Porsche AG",
    Department: "FII4",
    Platform: "SPInE - SAP Platform for Integration and Extension",
    Time: timestamp
  }
  
  const jsonStr = JSON.stringify(data);
  
//  console.log(jsonStr);
console.log(process.env.Platform);
console.log(process.env.Date);

app.get('/ping', function (req, res) {
  res.send(jsonStr);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('SPInE Test Service listening on port ' + port);
});