
//id szerint betolt egy hotelt az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function(objectrepository){
    return function(req, res, next){

        const HotelModel = objectrepository.HotelModel;
        HotelModel.findOne({_id: req.params.hotelid}, (err, hotel)=> {
            if(err || !hotel){
                return next(err);
            }

            res.locals.hotel = hotel
            return next();
        });

    };
};
