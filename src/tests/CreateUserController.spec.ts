import request from 'supertest';
import { app } from '../app';

describe('CreateUserController', () => {
  it('should create a user', async () => {
    const user = {
      name: 'Walter Burns',
      email: 'gog@cuaj.il',
      age: 21
    }

    const response = await request(app).post('/create').send(user);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Walter Burns');
    expect(response.statusCode).toBe(201);
  });
})
