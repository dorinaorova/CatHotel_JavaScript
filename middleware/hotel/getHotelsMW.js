
//az összes hotel listazasa az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function (objectrepository){
    return function(req, res, next){
        const HotelModel = objectrepository.HotelModel;
        HotelModel.find({}, (err, hotels) => {
            if(err){
                return next(err);
            }
            res.locals.hotels=hotels;
            return next();
        })
    };
};