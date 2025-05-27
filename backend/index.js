import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 2400;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// POST route
app.post('/', (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name && email && password) {
      res.status(200).send({
        success: true,
        data: req.body,
      });
    } else {
      res.status(400).send({
        success: false,
        error: "Input fields cannot be empty",
      });
    }

  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).send({
      success: false,
      error: "Internal server error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});