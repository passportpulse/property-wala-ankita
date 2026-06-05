const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const contentRoutes = require('./routes/contentRoutes');
const featureRoutes = require('./routes/featureRoutes');
const userRoutes = require('./routes/userRoutes');
const heatmapRoutes = require('./routes/heatmapRoutes');

dotenv.config({ path: path.join(__dirname, '.env') });

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/properties', propertyRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/features', featureRoutes);
app.use('/api/users', userRoutes);
app.use('/api/heatmap', heatmapRoutes);

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
}

module.exports = app;
