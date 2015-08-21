var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('index.ejs', {reactOutput: 'test'});
	});

	app.get('/edituser', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = 'edituser';
	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('edituser.ejs', {reactOutput: reactHtml});
	});

	app.get('/userprofile', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
		var reactHtml = 'userprofile';
	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('userprofile.ejs', {reactOutput: reactHtml});
	});

};