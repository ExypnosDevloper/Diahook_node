"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/audio", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.suicide.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "suicide":
      speech =
        '<speak><audio src="https://bit.ly/2NsXDlS"></audio>Put on your earphones.. Close your eyes and just Focus.</speak>';
      break;
    case "end":
      speech =
        '<speak><audio src="https://bit.ly/2NsXDlS"></audio>Put on your earphones.. Close your eyes and just Focus.</speak>';
      break;
    case "destruct":
      speech =
        '<speak><audio src="https://bit.ly/2NsXDlS"></audio>Put on your earphones.. Close your eyes and just Focus.</speak>';
      break;
    case "finish":
      speech =
        '<speak><audio src="https://bit.ly/2NsXDlS"></audio>Put on your earphones.. Close your eyes and just Focus.</speak>';
      break;
    case "kill":
      speech =
        '<speak><audio src="https://bit.ly/2NsXDlS"></audio>Put on your earphones.. Close your eyes and just Focus.</speak>>';
      break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "Team .Onion"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
