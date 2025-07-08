const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello from Nodejs App', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello from Nodejs App', done);
  });
});
