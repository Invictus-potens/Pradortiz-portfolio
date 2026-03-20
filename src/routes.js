const express = require('express');
const path = require('path');
const router = express.Router();

// Lista de projetos disponíveis.
// Para adicionar um novo projeto, basta incluir uma entrada aqui
// e colocar o build na pasta projects/<slug>/
const projects = [
  {
    slug: 'site-react',
    name: 'Site em React',
    description: 'Aplicação SPA construída com React e Vite.',
    tags: ['React', 'Vite', 'JavaScript'],
  },
  {
    slug: 'site-vue',
    name: 'Site em Vue',
    description: 'Aplicação SPA construída com Vue 3 e Vite.',
    tags: ['Vue', 'Vite', 'JavaScript'],
  },
  {
    slug: 'site-html-puro',
    name: 'Site HTML Puro',
    description: 'Site estático simples sem framework.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

// Expõe a lista de projetos como JSON (útil para futuras integrações)
router.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Rota de cada projeto: redireciona para a pasta estática
// (já servida pelo express.static em server.js)
router.get('/projects/:slug', (req, res) => {
  const { slug } = req.params;
  const exists = projects.find((p) => p.slug === slug);
  if (!exists) {
    return res.status(404).send('Projeto não encontrado.');
  }
  // Redireciona para o index.html do projeto
  res.redirect(`/projects/${slug}/index.html`);
});

module.exports = router;
module.exports.projects = projects;
