/**
 * Main entry point of the application.
 * Handles API routes and starts the server.
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';
import { validateCalculation } from './logic/validate.js';
import calculate from './logic/calculate.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;

// Middleware to parse JSON and handle headers
app.use(express.json());
app.use(cors())

// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.replace(/^Bearer\s/, '');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Error:', err);
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// API endpoint to perform calculations
app.post('/calculate', authenticateJWT, (req, res) => {
  const { num1, num2 } = req.body;
  const operator = req.headers['operator'];
  console.log('Calculation Parameters:', { num1, num2, operator });

  try {
    validateCalculation(operator, num1, num2);
   } catch (error) {
    console.log('Invalid Parameters', {error});
    return res.status(400).json({ error});
  }

  let result;
  try {
    result = calculate(operator, num1, num2);
  } catch (error) {
    return res.status(400).json({ error });
  }
  res.json({ result });
});

// Generate an access token (for testing)
function generateAccessToken(userName) {
  return jwt.sign({ username: userName }, secretKey, {expiresIn: '60d'});
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;