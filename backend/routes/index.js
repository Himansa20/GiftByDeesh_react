const express = require('express');
const router = express.Router();

// Basic health-check route
router.get('/status', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running successfully',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
