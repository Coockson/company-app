  
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://brad:brad@ds047666.mlab.com:47666/mytasklist_brad', ['companies']);
//var db = mongojs('mongodb://admin:123ali@ds257640.mlab.com:57640/creating-node-api', ['companies']);
// We are adding Docker-compose.yaml file and will create a underlying layer of docker with mongo so no need to connect URL of MongoDB
var db = mongojs('mongodb+srv://db-user:db-pass@company-app-wdbd7.mongodb.net/test?retryWrites=true&w=majority',['companies'])



// Get All companies
router.get('/companies', function(req, res, next){
    db.companies.find(function(err, companies){
        if(err){
            res.send(err);
        }
        res.json(companies);
    });
});

// Get Single company
router.get('/company/:id', function(req, res, next){
    db.companies.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
});

//Save company
router.post('/company', function(req, res, next){
    var company = req.body;
    if(!company.name || !company.id || !company.address || !company.city || !company.country ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.companies.save(company, function(err, company){
            if(err){
                res.send(err);
            }
            res.json(company);
        });
    }
});

// Delete company
router.delete('/company/:id', function(req, res, next){
    db.companies.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
});

// Update company
router.put('/company/:id', function(req, res, next){
    var company = req.body;
    var updTask = {};
    
    if(company.isDone){
        updTask.isDone = company.isDone;
    }
    
    if(company.title){
        updTask.title = company.title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.companies.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
    }
});

module.exports = router;