import express from "express";
import cookiePerser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongoDB.js";

dotenv.config();

const app = express();

// ---------------- Middlewares -----------------
app.use(
  cors({
    // @ts-ignore
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(cookiePerser());
app.use(express.json());

// ------------------ DB connection -------------------

await connectDB();

// ------------------ Routes ----------------------

app.get("/", (_, res) => {
  res.send("server is up and running!");
});

app.listen(8000, () => {
    console.log(`App is listening on PORT 8000`);
})

export default app;
