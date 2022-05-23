var expect = require('chai').expect;
var getCicaMW = require('../../../middleware/cica/getCicaMW.js');

describe('getCicaMW middleware ', function () {
    it('should return a cat', function(done){
        const mw = getCicaMW({
            CicaModel: {
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '2' });
                    cb(null, 'mockcica');
                }
            }
        });
        const resMock={
            locals: {}
        }
        mw({
            params:{
                cicaid: '2'
            }
        },
            resMock,
        (err)=>{
                expect(err).to.eql(undefined);
                expect(resMock.locals).to.be.eql({cica: 'mockcica'});
                done();
        });
    });

    it('should return error when db returns error', function (done) {
        const mw = getCicaMW({
            CicaModel: {
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '2' });
                    cb('hiba', null);
                }
            }
        });
        const resMock={
            locals: {}
        }
        mw({
            params:{
                cicaid: '2'
            }
        },
            resMock,
        (err)=>{
                expect(err).to.be.eql('hiba');
                done();
        });
    }
    );

    it('should call next when no cat found', function (done) {
        const mw = getCicaMW({
            CicaModel: {
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '2' });
                    cb(undefined, null);
                }
            }
        });
        const resMock={
            locals: {}
        }
        mw({
            params:{
                cicaid: '2'
            }
        },
            resMock,
        (err)=>{
            expect(err).to.eql(undefined);
            expect(resMock.locals).to.be.eql({});
                done();
        });
    }
    );

});