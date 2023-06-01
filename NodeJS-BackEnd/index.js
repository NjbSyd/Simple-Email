const express = require("express");
const sendMail = require("./sendMail");
const checkDomainValidity = require("./checkDns");
const app = express();
app.use(express.json());

app.post("/mail", async (req, res) => {
  console.log(req.body);
  const {to, subject, body} = req.body;
  const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    body {
      background-color: #f2f2f2;
      padding: 20px;
    }
    .container {
      width: 50%;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    h1 {
      text-align: center;
      color: #333;
      margin-top: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    td {
      vertical-align: top;
    }
    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #45a049;
    }
  </style><title>Contact Us</title>
</head>
<body>
<div class="container">
  <h1>Contact Information</h1>
  <table>
    <tr>
      <th>Name:</th>
      <td>${body.name}</td>
    </tr>
    <tr>
      <th>Contact No:</th>
      <td>${body.contact}</td>
    </tr>
    <tr>
      <th>Email:</th>
      <td>${body.email}</td>
    </tr>
    <tr>
      <th>Message:</th>
      <td>${body.message}</td>
    </tr>
  </table>
</div>
</body>
</html>


`;

  try {
    const resp = await sendMail(to, subject, template);
    return res.status(200).json({
      success: true, message: "Email sent successfully",
      resp: resp
    },);
  } catch (error) {
    return res.status(400).json({
      success: false, message: "Email not sent", resp: error
    });
  }
});

app.post("/dns", async (req, res) => {
  console.log(req.body);
  const {domain} = req.body;
  console.log(domain)
  try {
    let responseFromCheckDomainValidity = await checkDomainValidity(domain);
    console.log(responseFromCheckDomainValidity)
    if (responseFromCheckDomainValidity) {
      return res.status(200).json({
        success: true, message: "Domain checked successfully",
        domainValid: true
      });
    } else {
      return res.status(200).json({
        success: true, message: "Domain not valid", domainValid: false
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false, message: "Domain not valid", domainValid: false
    });
  }
});

app.listen(process.env.port || 3000, () => {
  console.log("server is running on port 3000");
});
