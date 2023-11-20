import request from 'supertest';
import app from '../index.js';

describe('POST /calculate', () => {
  const token = process.env.TESTING_TOKEN;
  it('should return the result of addition correctly', async () => {
    const res = await request(app)
      .post('/calculate')
      .set('Authorization', `Bearer ${token}`)
      .set('operator', 'add')
      .send({ num1: 5, num2: 3 });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('result', 8);
  });

  it('should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/calculate')
      .set('Authorization', `Bearer ${token}`)
      .set('operator', 'divide')
      .send({ num1: 'invalid', num2: 0 }); 
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid numbers provided');
  });

  it('should return 401 for invalid token', async () => {
    const res = await request(app)
      .post('/calculate')
      .set('Authorization', 'Bearer INVALID_TOKEN')
      .set('operator', 'add')
      .send({ num1: 5, num2: 3 });
    
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Unauthorized: Invalid token');
  });
});
