
//egy cica betoltese az adatbazisbol id alapjan

const requireOption = require('../requireOption');

module.exports = function (objectrepository){
    return function(req, res, next){
        const CicaModel = objectrepository.CicaModel;
        CicaModel.findOne({_id: req.params.cicaid} , (err, cica)=> {
            if(err || !cica){
                return next(err);
            }

            res.locals.cica = cica
            return next();
        });
    }
};