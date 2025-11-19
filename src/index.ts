import express from "express";
const app = express();
const PORT = 8001;

app.use(express.json());
// app.use(routers());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
