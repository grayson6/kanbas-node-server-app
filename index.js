import express from 'express';
import cors from 'cors';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';

import session from 'express-session';
import "dotenv/config";

import CourseRoutes from './Kanbas/Courses/routes.js';


import UserRoutes from './Kanbas/Users/routes.js';

const app = express();


app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "https://a5lab.netlify.app",
  })
 );

 const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));



app.use(express.json());
const PORT = process.env.PORT || 4000;


UserRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});