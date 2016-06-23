
var express  = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    ejs      = require('ejs')


Schema = new mongoose.Schema({
    adTitle : String,
    sName : String,
    emailId: String,
    price :String,
    city : String,
    contactNo : String,
    category : String,
    subCategory : String,
    brand :String,
    purchasedOn: String,
    description : String,
    postedOn : Date
}),

Blog = mongoose.model('Blog', Schema);

mongoose.connect('mongodb://manish:nayal@ds013564.mlab.com:13564/nayal_db');


var app = express()

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

app.get('/api', function (req, res) {
    res.json(200, {msg: 'OK' });
})

app.get('/viewads', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('viewAds.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});

app.get('/postad', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('postAd.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});


app.get('/admin', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('admin.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});

app.get('/about', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('about.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});

app.get('/contact', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('contact.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});

app.get('/post', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Blog.find({}, function ( err, blogs ){
        if(!err && blogs){
            res.render('post.ejs',{
                data :  blogs
            })
        } else {
            console.log(err)
        }
    });
});

app.get('/postad', function(req, res){
    res.render('postAd.ejs')
})

app.get('/', function(req, res){
    Blog.find({}).limit(3).exec(function(err, blogs){
        if(!err && blogs){
            res.render('index.ejs',{
                data :  blogs
            })
        } else{
            console.log(err);
            res.status(500).send("something went wrong while fetching blog summary");
        }
    })
})

app.post('/api/postad', function (req, res) {
    var blog = new Blog(
        {
            adTitle : req.body.adTitle,
            sName : req.body.sName,
            emailId : req.body.emailId,
            city : req.body.city,
            contactNo : req.body.contactNo,
            category : req.body.category,
            subCategory : req.body.subCategory,
            price : req.body.price,
            brand : req.body.brand,
            purchasedOn : req.body.purchasedOn,
            description : req.body.description,
            postedOn : Date.now()
        }
    );

    // http://mongoosejs.com/docs/api.html#model_Model-save
    blog.save(function (err, data) {
        if(!err && data){
            console.log('Data added successfully');
            res.redirect('/viewads')
        } else {
            res.json(500, {msg: 'Something went wrong' });
            console.log(err)
        }

    });
})

app.get('/api/viewads', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-remove
    User.remove({ category:'music' }, function ( err ) {
        if(!err){
            console.log("User deleted successfully")
        } else{
            console.log(err)
        }
    });
})

app.get('/viewads/:id', function(req, res){
    Blog.findById( req.params.id, function ( err, blog ) {
        if(!err && blog){
            res.render('adDetail.ejs',{
                data : blog
            })
        } else {
            console.log(err)
        }
    });
} )

app.get('/blog/:id', function(req, res){
    Blog.findById( req.params.id, function ( err, blog ) {
        if(!err && blog){
            res.render('adDetail.ejs',{
                data : blog
            })
        } else {
            console.log(err)
        }
    });
} )

app.get('/editAd/:id', function(req, res){
    Blog.findById( req.params.id, function ( err, blog ) {
        if(!err && blog){
            res.render('editAd.ejs',{
                data : blog
            })
        } else {
            console.log(err)
        }
    });

})

app.post('/api/editAd/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    Blog.findById( req.params.id, function ( err, blog ) {
            blog.adTitle = req.body.adTitle,
            blog.sName = req.body.sName,
            blog.emailId = req.body.emailId,
            blog.city = req.body.city,
            blog.contactNo = req.body.contactNo,
            blog.category = req.body.category,
            blog.subCategory = req.body.subCategory,
            blog.price = req.body.price,
            blog.brand = req.body.brand,
            blog.purchasedOn = req.body.purchasedOn,
            blog.description = req.body.description,
        // http://mongoosejs.com/docs/api.html#model_Model-save
        blog.save( function (err, data ){
            if(!err && data){
                res.redirect('/viewads')
            } else {
                console.log(err)
            }

        });
    });
});

app.get('/api/deleteAd/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    Blog.findById( req.params.id, function ( err, blog ) {
        // http://mongoosejs.com/docs/api.html#model_Model.remove
        blog.remove( function ( err ){
           console.log("Ad deleted successfully")
            res.redirect('/admin')
        });
    });
});

app.listen(8080);
console.log('Magic happens on port 8080');
