const express = require('express');
const path = require('path');
const router = express.Router();

// Lista de projetos disponíveis.
// Para adicionar um novo projeto, basta incluir uma entrada aqui
// e colocar o build na pasta projects/<slug>/
const projects = [
  {
  slug: 'documentacao-ia',
  name: 'I.Agro Documentação técnica',
  description: 'Documentação técnica para o assistente de IA da I.Agro feita em HTML usando skeleton.css como boilerplate. Documentação feita como requisito de atividade principal do terceiro ano.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Mermaid', 'Skeleton.css'],
  thumbnail: '/assets/img/iagro.png',
  },
  {
  slug: 'iagro',
  name: 'I.Agro, assistente de IA',
  description: 'Assistente de IA para o setor agrícola, desenvolvido com HTML, CSS e JavaScript. Back-end em Python utilizando FastAPI, com banco de dados PostgreSQL para armazenamento de informações. O projeto inclui integração com APIs externas para fornecer dados agrícolas em tempo real.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Postgresql'],
  thumbnail: '/projects/iagro/assets/css/img/image.png',
  },
  {
    slug: 'calculadora-cam',
    name: 'Calculadora de preços Krolik',
    description: 'Aplicação construida com skeleton css.',
    tags: ['Skeleton.css'],
    thumbnail: '/assets/img/cam.png'
  },
  {
    slug: 'site-vue',
    name: 'Site em Vue',
    description: 'Aplicação SPA construída com Vue 3 e Vite.',
    tags: ['Vue', 'Vite', 'JavaScript'],
  }
  
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
