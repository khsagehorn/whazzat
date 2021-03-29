# Whazzat?!

*EDIT: The Watson text analysis APIs are no longer publicly available.*

This web app allows users to enter text and then see a visualization of the positive or negative content of the content. This is accomplished using the Alchemy open-source sentiment-analysis api. The user will also be able to visually comapare the sentiment in two different pieces of text, which could have many interesting uses, from comparing consumer product reviews, pitting Presidential debate answers against one another, or determining whether Kanye or Wiz had the best burn tweets. It has a fun and interactive interface involving a positivity gauge which dynamically responds to the results of the text-analysis JSON return object.

The page consists of two containers, each with a text field, submit button, and a Positivity Gauge. The app sends an AJAX request to the API based on the text entered. The results determine the position of an indicator along a gauge with endpoints of "NICE" and "MEAN."
