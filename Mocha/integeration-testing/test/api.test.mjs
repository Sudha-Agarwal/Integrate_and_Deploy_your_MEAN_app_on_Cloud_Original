import request from 'supertest';
import { expect } from 'chai';
import app from '../app.mjs';

describe('API Tests', function () {
  // Global setup and teardown handled separately
  describe('GET /api/items', () => {
    it('should return a list of items', (done) => {
      request(app)
        .get('/api/items')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /api/items', () => {
    it('should create a new item', (done) => {
      const newItem = { name: 'Item 2' };

      request(app)
        .post('/api/items')
        .send(newItem)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('name', 'Item 2');
          done();
        });
    });
  });

  // Add more tests for PUT and DELETE endpoints if necessary
});
