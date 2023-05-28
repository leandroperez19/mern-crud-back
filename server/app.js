import express from "express";
import fileupload from "express-fileupload";
import postsRoutes from "./routes/posts.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(postsRoutes);

export default app;
