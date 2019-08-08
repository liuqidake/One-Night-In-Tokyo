# One Night in Tokyo – Introduction WebSite With JS HTML CSS Bootstrap
* A static website introducing the night life in Tokyo, Japan
*  https://obscure-beyond-53045.herokuapp.com 

## Requirements

For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Node installation on OS X

Install [Homebrew](https://brew.sh). When everything is fine, you should run
```
brew install node
```


## Languages & tools

* [HTML5](https://www.w3.org/html/)

* [JavaScript](https://www.javascript.com)

* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)

* [Bootstrap3](http://bootstrapdocs.com/v3.0.3/docs/getting-started/)

## Install Required Libraries Using NPM
The required libraries included could be found at package.json file

* [express](https://www.npmjs.com/package/express) - server side framework
```
npm install express
```
* [cloudinary-core](https://www.npmjs.com/package/cloudinary-core) - store images
```
npm install cloudinary-core
```
* [ejs](https://www.npmjs.com/package/ejs) - view engine
```
npm install ejs
```

## Run the start script
```
npm app.js
```

## Server Side RESTful API

* This project has three modules, which are "food", "shopping" and "onsen". Each section has several content sections.
* Import express framework and create a router object

```
const express = require("express");
var router = express.Router();
```

* The schema of http requests is "/content/modules/sections"

## Views

* Using ejs as the view engine
* Create footer and header files to be included in each ejs file. Footer file links bootstrap and css file
* Using grid system of Bootstrap framework to organize the content.
* The images included are trimmed and modified by cloudniary https://cloudinary.com to achieve better presence performance.

## Stylesheets

* This folder contains main.css and landing.css and reset.css files. 
* main.css file is a stylesheet file for the main content
* landing.css is for the landing page
* reset.css forces every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible.

## Scripts

* main.js contains the functions to realize the presence of adjusting the size of the components based on the size of devices, scrolling animation and revealing delay features etc.

## app.js

* Include all routers

```
const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const shoppingRoutes = require('./routes/shopping');
const onsenRoutes = require('./routes/onsen');

app.use(foodRoutes);
app.use(shoppingRoutes);
app.use(onsenRoutes);
```
* Set view engine and path of css and js files

```
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
```

* Configure the listening port and add message to notify that server gets started to run
```
app.listen(process.env.PORT,process.env.IP,function(){
	console.log('Server gets started');
})

```
## Deploymnet
Deploy this website at [Heroku](https://dashboard.heroku.com/apps)

