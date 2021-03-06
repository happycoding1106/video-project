/**
 * Created by UmairAhmed on 5/11/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var xmlparser = require('express-xml-bodyparser');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/human-experience')
mongoose.connect('mongodb://admin:root@ds151163.mlab.com:51163/thehumexpdevelop')
.then(function(){
    console.log('connection successful')
})
.catch(function(err){
    console.error(err)
});

//serve static files.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({limit: '100mb', extended: false }));
app.use(bodyParser.json({limit: '100mb'}));
app.use(xmlparser());

//REST Api.
app.use('/api/alerts', require('./server/routes/alerts'));
app.use('/api/users', require('./server/routes/users'));
app.use('/api/nuggets', require('./server/routes/nuggets'));
app.use('/api/folders', require('./server/routes/folders'));
app.use('/api/invites', require('./server/routes/invites'));
app.use('/api/shares', require('./server/routes/shares'));
app.use('/api/quotes', require('./server/routes/quotes'));
app.use('/api/tags', require('./server/routes/tags'));
app.use('/api/prompts', require('./server/routes/prompts'));
app.use('/api/topics', require('./server/routes/topics'));
app.use('/api/notes/', require('./server/routes/notes'));
app.use('/api/templates', require('./server/routes/templates'));
app.use('/api/spheres', require('./server/routes/spheres'));
app.use('/api/vital-associations', require('./server/routes/vital-associations'));
app.use('/api/vital-awards', require('./server/routes/vital-awards'));
app.use('/api/vital-education', require('./server/routes/vital-education'));
app.use('/api/vital-employment', require('./server/routes/vital-employment'));
app.use('/api/vital-licences', require('./server/routes/vital-licences'));
app.use('/api/vital-military', require('./server/routes/vital-military'));
app.use('/api/vital-personal-info', require('./server/routes/vital-personal-info'));
app.use('/api/vital-places-lived', require('./server/routes/vital-places-lived'));
app.use('/api/medical-allergies', require('./server/routes/medical-information/medical-allergies'));
app.use('/api/medical-conditions', require('./server/routes/medical-information/medical-conditions'));
app.use('/api/medical-contact', require('./server/routes/medical-information/medical-contact'));
app.use('/api/medical-disease', require('./server/routes/medical-information/medical-disease'));
app.use('/api/medical-hospitalizations', require('./server/routes/medical-information/medical-hospitalizations'));
app.use('/api/medical-insurance', require('./server/routes/medical-information/medical-insurance'));
app.use('/api/medical-medication', require('./server/routes/medical-information/medical-medication'));
app.use('/api/medical-procedures', require('./server/routes/medical-information/medical-procedures'));
app.use('/api/medical-profile', require('./server/routes/medical-information/medical-profile'));
app.use('/api/medical-providers', require('./server/routes/medical-information/medical-providers'));
app.use('/api/medical-surgeries', require('./server/routes/medical-information/medical-surgeries'));
app.use('/api/medical-vaccines', require('./server/routes/medical-information/medical-vaccines'));
app.use('/api/contact', require('./server/routes/contacts/contacts'));

app.get('/*', function(req, res){
    res.render('index.html')
});

app.set('views',__dirname + '/views');      //template path.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);      //for rendering html file.

var server  = app.listen(8080, function(){
    console.log("We have started our server on port 8080");
});
