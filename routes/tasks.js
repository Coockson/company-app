  
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
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
    var updCompany = {};

    if(company.name){
        updCompany.name = company.name;
    }
    if(company.id){
        updCompany.id = company.id;
    }
    if(company.address){
        updCompany.address = company.address;
    }
    if(company.city){
        updCompany.city = company.city;
    }
    if(company.country){
        updCompany.country = company.country;
    }
    if(company.email){
        updCompany.email = company.email;
    }
    if(company.phone){
        updCompany.phone = company.phone;
    }
    
    if(!updCompany){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        var newvalues = {
            $set: updCompany
        }
        db.companies.updateOne({ _id: mongojs.ObjectID(req.params.id) },newvalues,{ upsert: true });;
    
    }
});

module.exports = router;