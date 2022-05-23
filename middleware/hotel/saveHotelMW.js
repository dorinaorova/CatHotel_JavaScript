
//hotel adatainak mentese az adatbazisba
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const HotelModel = objectrepository.HotelModel;
    return function (req, res, next) {
        if(
            typeof req.body.name==='undefined' ||
            typeof req.body.address==='undefined'
        ){ 
            return next();
        }

        if(typeof res.locals.hotel === 'undefined')
        {
            res.locals.hotel = new HotelModel();
        }
        res.locals.hotel.name = req.body.name;
        res.locals.hotel.address = req.body.address;
        res.locals.hotel.save((err)=>{
            if(err){return next(err);}
        });
        return res.redirect('/hotelek');

    };
};