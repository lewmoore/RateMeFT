var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../src/app');

var expect = chai.expect;

chai.use(chaiHttp);

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
      expect(res.text.includes('Welcome!'));
    });
  });

  it('should display rating text', function() {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text.includes('What did you think of FT.com?'));
    });
  });
});
