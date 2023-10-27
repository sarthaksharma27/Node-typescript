import express, { Application } from 'express';
import path from 'path';
const ejsMate: any = require('ejs-mate');

const app: Application = express();
const port: number = 3000;

// Import user schema

// Import route files
import { router as aboutRouter } from './routes/about';
import { router as menuRouter } from './routes/menu';
import { router as indexRouter } from './routes/index';
import { router as authRouter } from './routes/auth';

// Middleware
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes
app.use(aboutRouter);
app.use(menuRouter);
app.use(indexRouter);
app.use(authRouter);

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
