var expect = require('chai').expect;
var saveCicaMW = require('../../../middleware/cica/saveCicaMW.js');

describe('saveCicaMW middleware', function () {
    it('should redirect to /cicak', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    name: 'Cirmi',
                    colour: 'cirmos',
                    hotel: '2',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb(null);
                        }
                    }
                },
                redirect: where=>{ 
                    expect(where).to.be.eql('/cicak');
                    done(); 
                }
            },
            (err)=>{}
        );
    });
    it('should call next with err if there is a db error', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    name: 'Cirmi',
                    colour: 'cirmos',
                    hotel: '2',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb('hiba');
                        }
                    }
                },
                redirect: where=>{ }
            },
            (err)=>{
                expect(err).to.be.eql('hiba');
                done();
            }
        );
    });

    it('should set res.locals.cica with cica object created', function (done) {
        class CicaMockModel{
            save(cb){cb(null);}
        }
        const mw = saveCicaMW({
            CicaModel: CicaMockModel
        });
        mw(
            {
                body:{
                    name: 'Cirmi',
                    colour: 'cirmos',
                    hotel: '2',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                },
                redirect: where=>{ 
                    expect(where).to.be.eql('/cicak');
                    done(); 
                }
            },
            (err)=>{}
        );
    });
    
    it('name is undefined', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    colour: 'cirmos',
                    hotel: '2',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb(null);
                        }
                    }
                },
                redirect: where=>{}
            },
            (err)=>{
                expect(err).to.be.eql(undefined);
                done();
            }
        );
    });
    it('colour is undefined', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    name: 'Cirmi',
                    hotel: '2',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb(null);
                        }
                    }
                },
                redirect: where=>{}
            },
            (err)=>{
                expect(err).to.be.eql(undefined);
                done();
            }
        );
    });
    it('hotel is undefined', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    name: 'Cirmi',
                    colour: 'cirmos',
                    date: '2021-12-05'
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb(null);
                        }
                    }
                },
                redirect: where=>{}
            },
            (err)=>{
                expect(err).to.be.eql(undefined);
                done();
            }
        );
    });
    it('date is undefined', function (done) {
        const mw = saveCicaMW({});
        mw(
            {
                body:{
                    name: 'Cirmi',
                    colour: 'cirmos',
                    hotel: '2',
                },
                params:{
                    cicaid: '2'
                }
            },
            {
                locals:{
                    cica:{
                        save: (cb)=>{
                            cb(null);
                        }
                    }
                },
                redirect: where=>{}
            },
            (err)=>{
                expect(err).to.be.eql(undefined);
                done();
            }
        );
    });
});