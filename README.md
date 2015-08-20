# 9-Trends-From-Mobile-Web-DevCon
This project is a nodejs powered slideshow for a lunch & learn to be presented about the topics at MWDCON this past July.

## Prerequisites
This guide assumes you have the following installed:
* npm
* nodejs
* bower


## Building the application

After cloning the application, install npm and bower packages.

`npm install`
`bower install`

## Running the application

Specifying the port is optional.  If it is not specified, the server will start on port 3003.

`node app.js <port>`

## About the application

This application serves up ejs pages as slides for a slideshow.  Left clicking on a slide will advance to the next one, while right clicking on a slide will return to the previous slide.

## Adding a slide

To add a slide, first create an ejs file in the /views/slides folder.  Then, in app.js add an entry to the array of slides specifying the filename and the title to be displayed when the slide is reached.