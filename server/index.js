const express = require('express');
const cors = require('cors');
const yaml = require('js-yaml');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
const CONFIG_PATH = './config.yml';

app.get('/api/template', (req, res) => {
  try {
    const config = yaml.load(fs.readFileSync(CONFIG_PATH, 'utf8'));
    res.json(config);
  } catch (err) {
    res.status(500).json({ message: "Failed to read configuration." });
  }
});

app.post('/api/template', (req, res) => {
  try {
    fs.writeFileSync(CONFIG_PATH, yaml.dump(req.body));
    res.status(200).json({ message: "Configuration saved." });
  } catch (err) {
    res.status(500).json({ message: "Failed to save configuration." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
