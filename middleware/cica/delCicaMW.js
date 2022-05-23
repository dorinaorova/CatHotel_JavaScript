//eltavolit egy cicat az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.locals.cica === 'undefined') {
            return next();
        }

        res.locals.cica.remove(err => {
            if (err) {
                return next(err);
            }

        return res.redirect('/cicak');
        });
    }
};