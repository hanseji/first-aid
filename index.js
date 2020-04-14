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

restService.post("/echo", function(req, res) {
  var echoText =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.echoText
      : "Seems like some problem. Speak again.";

  if(echoText == "심폐소생술"){

  }
  
  var speechResponse = {
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "Here's an example of a browsing carousel."
              }
            },
            {
              carouselBrowse: {
                items: [
                  {
                    title: echoText,
                    description: "Description of item 1",
                    footer: "Item 1 footer",
                    image: {
                      url: "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                      accessibilityText: "Image alternate text"
                    }
                  },
                  {
                    title: "Title of item 2",
                    description: "Description of item 2",
                    footer: "Item 2 footer",
                    image: {
                      url: "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                      accessibilityText: "Image alternate text"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  };
  
  return res.json({
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "Here's an example of a browsing carousel."
              }
            },
            {
              carouselBrowse: {
                items: [
                  {
                    title: echoText,
                    description: "Description of item 1",
                    footer: "Item 1 footer",
                    image: {
                      url: "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                      accessibilityText: "Image alternate text"
                    }
                  },
                  {
                    title: "Title of item 2",
                    description: "Description of item 2",
                    footer: "Item 2 footer",
                    image: {
                      url: "https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png",
                      accessibilityText: "Image alternate text"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    source: "webhook-echo-sample"
  });
});

/*
restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "webhook-echo-sample"
  });
});
*/

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
