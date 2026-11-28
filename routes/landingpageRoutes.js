import express from 'express';

const router = express.Router();

// Pagbukas ng website ("/"), landing page muna
router.get('/', (req, res) => {
  res.render('landingpage');
});

// Login button sa landing page ay pupunta dito
router.get('/login', (req, res) => {
  res.render('login');
});

export default router;