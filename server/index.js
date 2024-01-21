import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import itemRoutes from "./routes/items.js";
import tradeItemRoutes from "./routes/tradeItems.js";
import questionsRoutes from "./routes/questions.js";
import ordersRoutes from "./routes/orders.js";
import http from "http";
import stripeRoutes from "./routes/stripe.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/user", userRoutes);
app.use("/items", itemRoutes);
app.use("/tradeitems", tradeItemRoutes);
app.use("/questions", questionsRoutes);
app.use("/orders", ordersRoutes);
app.use("/stripe", stripeRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error));
