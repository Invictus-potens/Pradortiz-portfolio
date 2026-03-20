const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a landing page (public/)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve each project build from /projects/<name>
app.use('/projects', express.static(path.join(__dirname, '..', 'projects')));

// Dynamic routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
