const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const mongoSanitize = require("mongo-sanitize");

connectDb();
const app = express();

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

app.use((req, res, next) => {
  req.body = mongoSanitize(req.body);
  req.query = mongoSanitize(req.query);
  req.params = mongoSanitize(req.params);
  next();
});

app.use(rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later."
}));

app.use('/api/v1', require("./routes/blogRoutes"));

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
