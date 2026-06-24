const express = require('express');
const path = require('path');
const router = express.Router();

// Lista de projetos disponíveis.
// Para adicionar um novo projeto, basta incluir uma entrada aqui
// e colocar o build na pasta projects/<slug>/
const projects = [
  {
  slug: 'pro-carpentry',
  name: 'Pro Carpentry & Co.',
  description: 'Pro Carpentry & Co. é uma empresa de carpintaria situada na costa de Mississippi, especializada em serviços de construção e reforma. Com uma equipe formada por dois irmãos carpinteiros experientes, a empresa oferece uma ampla gama de serviços, incluindo construção de decks, reformas residenciais, instalação de armários personalizados e muito mais. A Pro Carpentry & Co. é conhecida por sua atenção aos detalhes, qualidade de trabalho e compromisso com a satisfação do cliente. (Irmãos do Dev Felipe Ortiz)',
  tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prisma', 'Docker/CI-CD', 'ENG'],
  thumbnail: '/assets/img/pro-carpentry.png',
  externalUrl: 'https://procarpentry.pradortiz.lat'
},
{
  slug: 'sinc-fotografia',
  name: 'Sinc Fotografia',
  description: 'SINC Fotografia é uma empresa na qual oferece serviços de fotografias, o projeto é uma landing page na qual serve de portfólio para a empresa, feito no estilo da Vogue e com o tema em preto e branco tem o diferencial onde foi realizado a criação de um painel adm, não sendo visível para clientes, o adm acessa por meio de rotas na qual digitando /auth você realiza cria um login e por ser o primeiro determinado acesso tem a permissão de adm, após o cadastro de um acesso é bloqueado automaticamente cadastros novos, assim garantindo a segurança do acesso ao painel adm, dentro da aplicação temos uma tela onde por meio de 4 opções conseguimos alterar determinadas informações e fotos dentro do site, além de uma parte para criar uma álbum e adicionar ao site.',
  tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Docker/CI-CD', 'Supabase(PostgresSQL)', 'Supabase Storage', 'PT'],
  thumbnail: '/assets/img/sinc-fotografia.png',
  externalUrl: 'https://sincfotografia.com/'
},
  {
  slug: 'Editor de itens do FFXII',
  name: 'Editor de itens do FFXII',
  description: 'Editor de itens para o jogo Final Fantasy XII, dentro dele é possível editar todos os itens existentes no jogo e gerar um documento Lua que pode ser utilizado no jogo.',
  tags: ['HTML5','CSS', 'JavaScript', 'Lua', 'Docker/CI-CD', 'PT/ENG'],
  thumbnail: '/assets/img/ffxii.png',
  externalUrl: 'https://ff12editor.pradortiz.lat/'
},
  {
  slug: 'documentacao-ia',
  name: 'I.Agro Documentação técnica',
  description: 'Documentação técnica para o assistente de IA da I.Agro feita em HTML usando skeleton.css como boilerplate. Documentação feita como requisito de atividade principal do terceiro ano.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Mermaid', 'Skeleton.css', 'PT'],
  thumbnail: '/assets/img/iagro.png',
  },
  {
  slug: 'iagro',
  name: 'I.Agro, assistente de IA',
  description: 'Assistente de IA para o setor agrícola, desenvolvido com HTML, CSS e JavaScript. Back-end em Python utilizando FastAPI, com banco de dados PostgreSQL para armazenamento de informações. O projeto inclui integração com APIs externas para fornecer dados agrícolas em tempo real.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL', 'Docker/CI-CD', 'PT'],
  thumbnail: '/projects/iagro/assets/css/img/image.png',
  },
  {
    slug: 'calculadora-krolik',
    name: 'Calculadora de preços Krolik',
    description: 'Aplicação construida com skeleton css, calculadora de preços de produtos vendidos pela empresa Krolik Tecnologia em Nuvens, em produção .',
    tags: ['HTML','CSS','JavaScript','Skeleton.css', 'PT'],
    thumbnail: '/assets/img/calculadora.png',
    externalUrl: 'https://usecam.krolik.com.br/calculadora'
  },
    {
    slug: 'profamilia',
    name: 'Homepage da Profamilia',
    description: 'Landing page criada como atividade complementar para disciplina de programação web, tendo como objetivo criar um site para uma ONG de nossa região, escolhemos a Associação Pró Família, uma instituição que promove a ajuda de crianças e mães na comunidade da Mangueira em Ribeirão Preto.',
    tags: ['Tailwind CSS', 'HTML5', 'Web semântica', 'SEO', 'Docker/CI-CD', 'PT'],
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
