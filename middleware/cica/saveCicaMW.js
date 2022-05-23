
//cica adatainak mentese az adatbazisba

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CicaModel = objectrepository.CicaModel;

    return function (req, res, next) {
        if(
            typeof req.body.name==='undefined' ||
            typeof req.body.colour==='undefined' ||
            typeof req.body.hotel ==='undefined' ||
            typeof req.body.date === 'undefined'
        ){ 
            return next();
        }
        if(typeof res.locals.cica==='undefined'){
            res.locals.cica= new CicaModel();
        }
        res.locals.cica.name = req.body.name;
        res.locals.cica.colour = req.body.colour;

        res.locals.cica.date = req.body.date;
        res.locals.cica._hotel = req.body.hotel;

        res.locals.cica.save((err)=>{
            if(err){return next(err);}
        });

        return res.redirect('/cicak');

    };
};