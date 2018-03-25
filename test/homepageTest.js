var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../src/app');
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var expect = chai.expect;

chai.use(chaiHttp);

var testSchema = new Schema({
  rating: String
});

var Value = mongoose.model('Value', testSchema);

describe('Database Tests', function(){
  before(function (done) {
    mongoose.connect('mongodb://localhost:27017/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to the Database')
      done();
    })
  })
  describe('Test Database', function() {
    it('New rating object saved to test database', function(done){
      var testValue = Value({
        rating: '4'
      });
      testValue.save();
      done();
    })
  })

  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done)
    })
  })
})


describe('Testing landing page', function() {
  it('shouldnt error', function() {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res).to.have.status(200);
    });
  });

  it('should display welcome text', function() {
    chai.request(app)
    .get('/')
    .end(function(err,res) {
      expect(res.text).to.include('Welcome!');
    });
  });

  it('should display rating text', function() {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include('What did you think of FT.com?');
    });
  });
});
