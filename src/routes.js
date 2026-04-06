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
    slug: 'calculadora-krolik',
    name: 'Calculadora de preços Krolik',
    description: 'Aplicação construida com skeleton css, calculadora de preços de produtos vendidos pela empresa Krolik Tecnologia em Nuvens, em produção .',
    tags: ['HTML','CSS','JavaScript','Skeleton.css'],
    thumbnail: '/assets/img/calculadora.png',
    externalUrl: 'https://usecam.krolik.com.br/calculadora'
  },
  {
    slug: 'zelo-home',
    name: 'Homepage da Zelo',
    description: 'Landing page de alto impacto desenvolvida para a Zelo, apresentando uma solução revolucionária que transforma a manutenção reativa em inteligência preventiva. O projeto foca em uma experiência de usuário imersiva, utilizando animações de ponta para guiar o cliente através do ecossistema de gestão inteligente de ativos e saúde predial.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'TypeScript'],
    thumbnail: '/assets/img/zelo.png',
    externalUrl: 'https://zelo-home.pradortiz.lat/'
  },
    {
    slug: 'Editor de itens do FFXII',
    name: 'Editor de itens do FFXII',
    description: 'Editor de itens para o jogo Final Fantasy XII, dentro dele é possível editar todos os itens existentes no jogo e gerar um documento Lua que pode ser utilizado no jogo.',
    tags: ['HTML5','CSS', 'JavaScript','Lua'],
    thumbnail: '/assets/img/ffxii.png',
    externalUrl: 'https://ff12editor.pradortiz.lat/'
  },
    {
    slug: 'profamilia',
    name: 'Homepage da Profamilia',
    description: 'Landing page criada como atividade complementar para disciplina de programação web, tendo como objetivo criar um site para uma ONG de nossa região, escolhemos a Associação Pró Família, uma instituição que promove a ajuda de crianças e mães na comunidade da Mangueira em Ribeirão Preto.',
    tags: ['Tailwind CSS', 'HTML5', 'Web semântica', 'SEO'],
    thumbnail: '/assets/img/profamilia.png',
    externalUrl: 'https://profamilia.pradortiz.lat'
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
  // Se o projeto tem URL externa, redireciona para lá
  if (exists.externalUrl) {
    return res.redirect(exists.externalUrl);
  }
  // Caso contrário, redireciona para o index.html do projeto
  res.redirect(`/projects/${slug}/index.html`);
});

module.exports = router;
module.exports.projects = projects;
