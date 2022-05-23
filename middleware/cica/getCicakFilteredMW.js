//az összes cica listazasa az adatbazisbol

const requireOption = require('../requireOption');

module.exports = function (objectrepository){
    return function(req, res, next){
        const CicaModel = objectrepository.CicaModel;
        const { name, colour, id } = req.body;
        let query = {};
        if(colour) {
            query.colour = colour;
        }
        if(name) {
            query.name = name;
        }
        if(id){
            query._id=id
        }
        CicaModel.find(query).populate('_hotel').exec(function (err, results) {
            if (err) {
              return next(new Error('Error getting tasks'));
            }
            console.log("nlkflí-");
            res.locals.cicak = results;
            return next();
          });
        };
};