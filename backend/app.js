// backend/app.js
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', courseRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
