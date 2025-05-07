// backend/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// 取得所有課程
router.get('/courses', async (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

// 新增課程
router.post('/courses', async (req, res) => {
    const { name, teacher } = req.body;
    const course = await Course.create({ name, teacher });
    res.status(201).json(course);
});

module.exports = router;
