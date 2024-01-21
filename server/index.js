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
import { Server } from "socket.io";
import stripeRoutes from "./routes/stripe.js";
import { v4 as uuidv4 } from "uuid";
// import {
//   findSession,
//   findAllSessions,
//   saveSession,
// } from "./controllers/session.js";
import { findSession, findAllSessions, saveSession } from "./sessionStorage.js";

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

    const io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    io.use(async (socket, next) => {
      const sessionId = socket.handshake.auth.sessionId;

      if (sessionId) {
        //find my session
        // const session = await findSession(sessionId, next);
        const session = findSession(sessionId);
        if (session) {
          socket.sessionId = sessionId;
          socket.userId = session.userId;
          socket.username = session.username;
          return next();
        } else {
          return next(new Error("Invalid Session"));
        }
      }

      const username = socket.handshake.auth.username;
      if (!username) {
        return next(new Error("Invalid username"));
      }
      socket.username = username;
      socket.userId = uuidv4();
      socket.sessionId = uuidv4();
      next();
    });

    io.on("connection", async (socket) => {
      // console.log("A user co?nnected:", socket.id);
      // await saveSession(socket.sessionId, {
      //   UserId: socket.userId,
      //   Username: socket.username,
      //   sessionId: socket.sessionId,
      //   ConnectionStatus: true,
      // });
      saveSession(socket.sessionId, {
        userId: socket.userId,
        username: socket.username,
        connected: true,
      });
      socket.join(socket.userId);

      const users = [];
      findAllSessions().forEach((session) => {
        if (session.userId !== socket.userId) {
          users.push({
            userId: session.userId,
            username: session.username,
            connected: session.connected,
          });
        }
      });

      //all users event
      socket.emit("users", users);

      socket.emit("session", {
        sessionId: socket.sessionId,
        userId: socket.userId,
        username: socket.username,
      });

      //new user event
      socket.broadcast.emit("user connected", {
        userId: socket.userId,
        username: socket.username,
      });

      //new message event
      socket.on("new message", (message) => {
        socket.broadcast.emit("new message", {
          userId: socket.userId,
          username: socket.username,
          message,
        });
      });

      // socket.on("disconnect", () => {
      //   // console.log("User disconnected: ", socket.id);
      // });
    });

    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
