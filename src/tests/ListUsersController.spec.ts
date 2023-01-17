import request from 'supertest';
import { app } from '../app';
import { User, UsersRepository } from '../repositories/UsersRepository';
import { AuthenticateService } from '../services/AuthenticateService';

describe('ListUsersController', () => {
  let user: User;
  let token: string | null;

  beforeAll(() => {
    const usersRepository = new UsersRepository();

    user = usersRepository.create({
      name: 'Gary Briggs',
      email: 'nimikepe@azamil.nu',
      age: 30,
      password: 'supersecretpassword'
    })

    const authenticateService = new AuthenticateService(usersRepository);
    token = authenticateService.execute(user.email, user.password);
  });

  it('should be able to list users', async () => {
    const response = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('users');
    expect(response.body.users).toHaveLength(1);
  })
})
