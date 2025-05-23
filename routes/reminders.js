const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

router.post('/', async (req, res) => {
  try {
    const { date, time, message, method } = req.body;

    // Simple validation
    if (!date || !time || !message || !method) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create datetime object
    const datetime = new Date(`${date}T${time}`);
    if (isNaN(datetime.getTime())) {
      return res.status(400).json({ error: 'Invalid date/time format' });
    }

    // Create and save reminder
    const reminder = new Reminder({ datetime, message, method });
    await reminder.save();

    res.status(201).json(reminder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;