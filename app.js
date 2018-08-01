const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use(express.static('assets'));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render("index");
});

app.get('/flooring', function(reg, res){
  res.render("flooring");
});

app.listen(process.env.PORT || 8002, function(){
  console.log(`Island Tile Server Started`);
});
