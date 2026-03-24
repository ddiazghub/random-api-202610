const crypto = require("crypto");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (re, res) => {
  res.status(200).send("Hello World!!!");
});

app.get("/random/int", (req, res) => {
  res.status(200).send(crypto.randomInt(1000000));
});

sdkj;gsjl;kdg;jlasdg;jlsd;'jlsadjl;g';jlkdg'jkl;as;jklgajkl;fgkl;asklaksldgk;lasgk;l{"type":"excalidraw/clipboard","elements":[{"id":"HqaZTNxRYcYgDKbfgbU90","type":"rectangle","x":2451.095036582341,"y":951.2389322916667,"width":237.0166015625,"height":72.9345703125,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"b01","roundness":{"type":3},"seed":2051111294,"version":85,"versionNonce":680200738,"isDeleted":false,"boundElements":[{"id":"NC-uYr-TkuNnPwhzxiPuk","type":"arrow"}],"updated":1774385966552,"link":null,"locked":false},{"id":"ZKsQoYb5k2_NAvgXMRSsT","type":"text","x":2484.390935019841,"y":976.7174479166667,"width":165.87986755371094,"height":25,"angle":0,"strokeColor":"#1e1e1e","backgroundColor":"transparent","fillStyle":"solid","strokeWidth":2,"strokeStyle":"solid","roughness":1,"opacity":100,"groupIds":[],"frameId":null,"index":"b03","roundness":null,"seed":387074814,"version":76,"versionNonce":531469182,"isDeleted":false,"boundElements":null,"updated":1774385964426,"link":null,"locked":false,"text":"+10  README.md","fontSize":20,"fontFamily":5,"textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"+10  README.md","autoResize":true,"lineHeight":1.25}],"files":{}}dgklkslgkls
app.listen(3000, () => console.log("Server running on port: ", 3000));
