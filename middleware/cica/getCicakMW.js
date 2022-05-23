
//az összes cica listazasa az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function (objectrepository){
    return function(req, res, next){
        const CicaModel = objectrepository.CicaModel;

        CicaModel.find({}).populate('_hotel').exec(function (err, results) {
            if (err) {
              return next(new Error('Error getting tasks'));
            }
      
            res.locals.cicak = results;
            return next();
          });
        };
    

};