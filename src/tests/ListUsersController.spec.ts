import request from 'supertest';
import { app } from '../app';

describe('ListUsersController', () => {
  it('should be able to list users', async () => {
    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('users');
  })
})
