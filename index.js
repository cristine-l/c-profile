const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Profile</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f0f0f0;
        }
        .container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #333; }
        .info { margin: 15px 0; }
        .quote {
          font-style: italic;
          color: #666;
          border-left: 4px solid #007bff;
          padding-left: 15px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Student Profile</h1>
        <div class="info">
          <strong>Full Name:</strong> Cristine Lavitag
        </div>
        <div class="info">
          <strong>Section:</strong> IT BA-4102
        </div>
        <div class="quote">
          <p>"Due date"</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});