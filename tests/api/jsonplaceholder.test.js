const request = require('supertest');

const API = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API', () => {

  test('GET /users → 200', async () => {
    const res = await request(API).get('/users');
    expect(res.status).toBe(200);
  });

  test('GET /users/1 → 200', async () => {
    const res = await request(API).get('/users/1');
    expect(res.status).toBe(200);
  });

});