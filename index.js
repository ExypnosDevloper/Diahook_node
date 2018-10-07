"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const{ dialogflow }=require('actions-on-google');
const app = dialogflow({
	debug: true
})

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/audio", function(req, res) {
		app.intent("help", conv=>{
			return conv.ask('You can count on following:\n\n1.Aasra Address:104, Sunrise Arcade, Plot No. 100, Sector 16, Koparkhairane, Navi Mumbai - 40070924 Hour Helpline 022-27546669 Office:(10am to 7pm) 022-27546667 Email: aasrahelpline@yahoo.com Contact Person: Johnson Thomas, 9820466726')
		});
		
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "music one":
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
