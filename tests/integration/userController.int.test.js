const request = require('supertest');
const app = require('../../app');
const newUser = require('../mock-data/new-user.json');
const currUser = require('../mock-data/curr-user.json');

const endpointUrl = '/api/v1/user/';
let newUserId;

describe(endpointUrl, () => {
  it(`POST ${endpointUrl}signup`, async () => {
    const response = await request(app)
      .post(`${endpointUrl}signup`)
      .send(newUser);
    expect(response.statusCode).toBe(200);
    newUserId = response.body.id;
  });
  it(`should return error 500 on malformed data with POST${endpointUrl}signup`, async () => {
    const response = await request(app)
      .post(`${endpointUrl}signup`)
      .send({ email: 'Missing done property' });
    expect(response.statusCode).toBe(500);
  });
  it(`POST ${endpointUrl}login`, async () => {
    const response = await request(app)
      .post(`${endpointUrl}login`)
      .send(newUser);
    expect(response.statusCode).toBe(200);
    newUserId = response.body.id;
  });
  it(`should return error 500 on malformed data with POST${endpointUrl}signup`, async () => {
    const response = await request(app)
      .post(`${endpointUrl}login`)
      .send({ email: 'Missing done property' });
    expect(response.statusCode).toBe(500);
  });
});
