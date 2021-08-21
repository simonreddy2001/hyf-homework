// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const addHead = require("./add_head");

app.get("/", (request, response) => {
  response.send(`
  <html>
  <head>
  <h1>its Home</h1>
  </head>
    <body>
        <h1>My portfolio</h1>
    </body>
    </html>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
  ${addHead('Contact')}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
  `);
});
app.get("/education", (request, response) => {
  response.send(`
  <head>
  <title>Education</title></head>
    <body>
        <h1>Education</h1>
        <p>This is a Education page</p>
    </body>
  `);
});
app.get("/skills", (request, response) => {
  response.send(`
  <head>
  <title>Skills</title></head>
    <body>
        <h1>Skills</h1>
        <p>This is a skills page</p>
    </body>
  `);
});
app.get("/projects", (request, response) => {
  response.send(`
  <head>
  <title>Projects</title></head>
    <body>
        <h1>projects</h1>
        <p>This is a projects page</p>
        <codeUrl></codeUrl> <previewUrl /> <img />
    </body>
  `);
});

app.get('/test-report', function (requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
