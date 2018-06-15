const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const shoppingRoutes = require('./routes/shopping');
const onsenRoutes = require('./routes/onsen');

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.use(foodRoutes);
app.use(shoppingRoutes);
app.use(onsenRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
	console.log('Server gets started');
})
