const renderMW = require('../middleware/renderMW');

const getCicakMW = require('../middleware/cica/getCicakMW');
const getCicakFilteredMW = require('../middleware/cica/getCicakFilteredMW');
const getCicaMW = require('../middleware/cica/getCicaMW');
const saveCicaMW = require('../middleware/cica/saveCicaMW');
const delCicaMW = require('../middleware/cica/delCicaMW');

const getHotelMW = require('../middleware/hotel/getHotelMW');
const getHotelsMW = require('../middleware/hotel/getHotelsMW');
const saveHotelMW = require('../middleware/hotel/saveHotelMW');
const delHotelMW = require('../middleware/hotel/delHotelMW');


const CicaModel = require('../models/cica');
const HotelModel = require('../models/hotel');


module.exports = function (app) {
    const objRepo = {
        CicaModel: CicaModel,
        HotelModel: HotelModel,
    };

    app.get('/',
    renderMW(objRepo,'index'));

    app.get('/cicak',
        getCicakMW(objRepo),
        renderMW(objRepo,'catlist'));
    app.use('/cicak',
        getCicakFilteredMW(objRepo),
        renderMW(objRepo,'catlist'));

    app.get('/cica/new',
        getHotelsMW(objRepo),
        renderMW(objRepo, 'newcat'));
        
    app.use('/cica/new',
        getHotelsMW(objRepo),
        saveCicaMW(objRepo),
        renderMW(objRepo, 'newcat'));

    app.use('/cica/edit/:cicaid',
        getHotelsMW(objRepo),
        getCicaMW(objRepo),
        saveCicaMW(objRepo),
        renderMW(objRepo, 'catupdate'));

    app.get('/cica/del/:cicaid',
        getCicaMW(objRepo),
        delCicaMW(objRepo));

    app.get('/hotelek',
        getHotelsMW(objRepo),
        renderMW(objRepo, 'hotellist'));

    app.get('/hotel/new',
        renderMW(objRepo, 'newhotel'));

    app.use('/hotel/new',
        saveHotelMW(objRepo),
        renderMW(objRepo, 'newhotel'));

    app.use('/hotel/edit/:hotelid',
        getHotelMW(objRepo),
        saveHotelMW(objRepo),
        renderMW(objRepo, 'hotelupdate'));

    app.get('/hotel/del/:hotelid',
        getHotelMW(objRepo),
        delHotelMW(objRepo),
        renderMW(objRepo, 'hotelupdate'));
};
