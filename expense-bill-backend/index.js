const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  TextractClient,
  AnalyzeExpenseCommand,
} = require("@aws-sdk/client-textract");

const app = express();
const port = 5000;
// to amend the commits
app.use(cors());
app.use(bodyParser.json());

const uploads = multer({ storage: multer.memoryStorage() });

const textractClient = new TextractClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

app.post("/analyze-expense", uploads.single("file"), async (req, res) => {
  const params = {
    Document: {
      Bytes: req.file.buffer,
    },
  };
  const command = new AnalyzeExpenseCommand(params);
  try {
    const data = await textractClient.send(command);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log("Server Running on port ", port);
});
