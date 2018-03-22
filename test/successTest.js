var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../src/app');


var expect = chai.expect;

chai.use(chaiHttp);

describe('Success page', function() {
  it('should display text', function(){
    chai.request(app)
    .get('/success')
    .end(function(err, res) {
      expect(res.text.includes('Thanks for your feedback!'))
    })
  })
})

describe('successfully submits request', function(){
  it('submits post request to success page', function(){
    chai.request(app)
    .post('/success')
    .send({
      'dropdown': '5'
    })
    .end(function(err, res) {
      chai.expect(res.status).to.equal(200);
    })
  })
})
