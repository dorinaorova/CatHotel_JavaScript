
//eltavolit egy hotelt az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {


        
        if (typeof res.locals.hotel === 'undefined') {
            return next();
        }

        res.locals.hotel.remove(err => {
            if (err) {
                return next(err);
            }

        return res.redirect('/hotelek');
        });
    };
};