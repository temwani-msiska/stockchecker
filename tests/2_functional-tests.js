const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  // Test for viewing one stock
  test('Viewing one stock', function(done) {
    chai
      .request(server)
      .get('/api/stock-prices')
      .query({ stock: '$' }) 
      .end(function(err, res) {
        assert.equal(res.status, 200);
      
        done();
      });
  });
  // Test for viewing one stock and liking it
  test('Viewing one stock and liking it', function(done) {
    chai
      .request(server)
      .get('/api/stock-prices')
      .query({ stock: '$', like: true }) 
      .end(function(err, res) {
        assert.equal(res.status, 200);
        
        done();
      });
  });

  // Test for viewing the same stock and liking it again
  test('Viewing the same stock and liking it again', function(done) {
    chai
      .request(server)
      .get('/api/stock-prices')
      .query({ stock: '$', like: true })
      .end(function(err, res) {
        assert.equal(res.status, 200);
       
        done();
      });
  });

  // Test for viewing two stocks
  test('Viewing two stocks', function(done) {
    chai
      .request(server)
      .get('/api/stock-prices')
      .query({ stock: ['$', '£'] }) 
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });

  // Test for viewing two stocks and liking them
  test('Viewing two stocks and liking them', function(done) {
    chai
      .request(server)
      .get('/api/stock-prices')
      .query({ stock: ['$', '£'], like: true }) 
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });
});

