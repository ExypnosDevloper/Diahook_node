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
        '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/peace-ca02b.appspot.com/o/test.mp3?alt=media&token=3bb5992a-d5d3-4f57-b3b4-24adff7f63fb"></audio>did not get your audio file</speak>';
      break;
    case "end":
      speech =
        '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/peace-ca02b.appspot.com/o/test.mp3?alt=media&token=3bb5992a-d5d3-4f57-b3b4-24adff7f63fb">did not get your audio file</audio></speak>';
      break;
    case "destruct":
      speech =
        '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/peace-ca02b.appspot.com/o/test.mp3?alt=media&token=3bb5992a-d5d3-4f57-b3b4-24adff7f63fb">did not get your audio file</audio></speak>';
      break;
    case "finish":
      speech =
        '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/peace-ca02b.appspot.com/o/test.mp3?alt=media&token=3bb5992a-d5d3-4f57-b3b4-24adff7f63fb">did not get your audio file</audio></speak>';
      break;
    case "kill":
      speech =
        '<speak><audio src="https://firebasestorage.googleapis.com/v0/b/peace-ca02b.appspot.com/o/test.mp3?alt=media&token=3bb5992a-d5d3-4f57-b3b4-24adff7f63fb">did not get your audio file</audio></speak>';
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
