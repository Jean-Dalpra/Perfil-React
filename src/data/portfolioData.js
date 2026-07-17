import agentePrint from '../assets/agenteprint.png'
import mapaPrint from '../assets/mapaprint.png'
import anatoguiaprint from '../assets/anatoguiaprint.png'
import tabelaPrint from '../assets/tabelaprint.png'
import bibliotecaPrint from '../assets/vestibularprint.png'

export const PROJETOS = [
  {
    id: 1,
    titulo: 'Agente Urbano',
    imagem: agentePrint,
    descricao:
      'Plataforma de participação cívica para reporte de problemas urbanos, com visualização georreferenciada, acompanhamento em tempo real e gerenciamento da cidade pela comunidade.',
    contexto:
      'Desenvolvi a solução como parte de um projeto integrador para conectar cidadãos e gestores públicos usando mapas interativos.',
    responsabilidades: [
      'Modelar a arquitetura front-end e back-end',
      'Criar o mapa com Mapbox GL e Leaflet',
      'Implementar captura de relatórios com foto e localização',
      'Integrar assistente de IA para orientar o usuário',
      'Criar modo 3D para visualização de tendências'
    ],
    resultados:
      'A solução permite registrar ocorrências de forma rápida, visualizar tendências no mapa e gerar relatórios de gestão.',
    aprendizados:
      'Refinei habilidades em GIS, APIs de mapas e integração de múltiplos provedores de IA e APIs.',
    tecnologias: ['PHP', 'Leaflet.js', 'Mapbox GL', 'MySQL', 'JavaScript'],
    status: 'Em andamento',
    tipo: 'Projeto Integrador',
    enlace: 'https://agenteurbano.page.gd/?i=1',
  },
  {
    id: 2,
    titulo: 'Comércio no Mapa',
    imagem: mapaPrint,
    descricao:
      'Diretório georreferenciado para pequenos comércios, com busca por categoria, endereço e moderação protegida.',
    contexto:
      'Construído pensando nos pequenos empreendedores, o produto ajudou a mapear pontos de venda locais com identidade visual personalizada.',
    responsabilidades: [
      'Desenvolver o painel de administração',
      'Criar fluxo de cadastro e moderação',
      'Integrar mapas com OpenStreetMap',
      'Garantir performance em consultas geoespaciais',
    ],
    resultados:
      'A plataforma permitiu visualizar comércios próximos e gerenciar informações de forma segura e confiável.',
    aprendizados:
      'Aprofundei conhecimentos em geolocalização, UX para diretórios e segurança de moderação via modo equipe.',
    tecnologias: ['PHP', 'PDO', 'Leaflet.js', 'OpenStreetMap', 'MySQL'],
    status: 'Concluído',
    tipo: 'Projeto Institucional',
    enlace: 'http://localhost/Mapa-Empresarial/',
  },
  {
    id: 3,
    titulo: 'Biblioteca Vestibular',
    imagem: bibliotecaPrint,
    descricao:
      'Catálogo de livros com filtros dinâmicos, status de leitura e busca em tempo real para estudantes.',
    contexto:
      'Desenvolvido como ferramenta de apoio para vestibulandos, com foco em usabilidade e persistência de favoritos.',
    responsabilidades: [
      'Construir a interface em React com Vite',
      'Implementar filtros por categoria, status e pesquisa',
      'Adicionar favoritos persistentes via localStorage',
      'Garantir layout responsivo para mobile e desktop',
    ],
    resultados:
      'A plataforma facilita a organização de leituras e o acesso rápido a livros de preparação.',
    aprendizados:
      'Ganhei prática em React, performance de listas e interatividade on-line sem backend pesado.',
    tecnologias: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'Em andamento',
    tipo: 'Projeto Integrador',
    enlace: 'https://seuprojeto.com/biblioteca-vestibular',
  },
  {
    id: 4,
    titulo: 'Tabela Periódica Interativa',
    imagem: tabelaPrint,
    descricao:
      'Tabela periódica interativa com os 118 elementos, modelos atômicos animados e uma calculadora de combinações e cargas químicas, com trilha sonora e fundo animado.',
    contexto:
      'Projeto pessoal para estudar manipulação de DOM e consumo de dados estruturados aplicados a um tema de química.',
    responsabilidades: [
      'Estruturar os dados dos 118 elementos em JSON',
      'Criar modelos atômicos 2D animados (prótons, nêutrons, elétrons)',
      'Implementar calculadora de combinações e cargas químicas',
      'Adicionar trilha sonora e animação de fundo',
    ],
    resultados:
      'Permite explorar cada elemento com informações detalhadas e simular combinações químicas de forma visual.',
    aprendizados:
      'Pratiquei manipulação de DOM em JavaScript puro, organização de dados em JSON e criação de animações CSS.',
    tecnologias: ['HTML5', 'CSS', 'JavaScript', 'JSON'],
    status: 'Concluído',
    tipo: 'Projeto Pessoal',
    enlace: 'https://github.com/Jean-Dalpra/tabela-Mendeleev-API',
  },
  {
    id: 5,
    titulo: 'AnatoGuia',
    imagem: anatoguiaprint,
    descricao:
      'Plataforma educativa sobre os sistemas do corpo humano (cardiovascular, respiratório, digestório, nervoso, muscular e mais), com quizzes por sistema, busca e versão mobile.',
    contexto:
      'Desenvolvido em grupo para uma feira de ciências do curso técnico, unindo conteúdo didático com um assistente de IA.',
    responsabilidades: [
      'Construir páginas e navegação para os 14 sistemas do corpo humano',
      'Criar quizzes interativos por sistema com telas de vitória/derrota',
      'Implementar busca com sugestões no cabeçalho',
      'Integrar um back-end em Node/Express para o assistente de IA',
    ],
    resultados:
      'Resultou em um site educativo completo, usado como material de apoio na feira de ciências da turma.',
    aprendizados:
      'Trabalhei organização de um projeto grande em equipe, estruturação de múltiplas páginas HTML e integração de um back-end simples em Node.js.',
    tecnologias: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    status: 'Concluído',
    tipo: 'Projeto de Turma',
    enlace: 'https://github.com/senacrs-emti/2024-1MA-freecode-G05',
  },
]

export const HABILIDADES_TECNICAS = [
  { grupo: 'Front-end', lista: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'] },
  { grupo: 'Back-end', lista: ['PHP', 'Node.js', 'Express', 'MySQL', 'PDO'] },
  { grupo: 'Mapas & Geo', lista: ['Leaflet.js', 'Mapbox GL', 'OpenStreetMap'] },
  { grupo: 'Ferramentas', lista: ['Git', 'GitHub', 'XAMPP', 'VS Code'] },
]

export const COMPETENCIAS_PROFISSIONAIS = [
  {
    titulo: 'Trabalho em equipe',
    descricao:
      'Experiência dividindo tarefas e alinhando prazos em projetos de grupo na escola técnica.',
  },
  {
    titulo: 'Comunicação',
    descricao:
      'Capacidade de explicar decisões técnicas de forma clara para colegas e professores.',
  },
  {
    titulo: 'Resolução de problemas',
    descricao:
      'Abordagem sistemática para depurar bugs e destravar integrações complexas entre APIs.',
  },
  {
    titulo: 'Proatividade',
    descricao:
      'Busca constante por aprender novas ferramentas e aplicá-las diretamente nos projetos.',
  },
]

export const EXPERIENCIAS = [
  {
    id: 1,
    titulo: 'Curso Técnico em Desenvolvimento Web e Aplicações Mobile',
    instituicao: 'Senac RS',
    periodo: '2024 – atual',
    tipo: 'Formação',
    descricao:
      'Formação técnica com foco em programação web, banco de dados e projetos integradores em equipe.',
  },
  {
    id: 2,
    titulo: 'Premio na feira Técnica de 2024 com o site Anatoguia',
    instituicao: 'Senac RS',
    periodo: '2024',
    tipo: 'Competição',
    descricao:
      'Premiado com o projeto de tecnologia para aprendizado Anatoguia, focado em cultura sobre funções do corpo humano.',
  },
  {
    id: 3,
    titulo: 'Feira de Tecnologia — AnatoGuia',
    instituicao: 'Senac RS',
    periodo: '2025',
    tipo: 'Competição',
    descricao:
      'Desenvolvimento em grupo de uma plataforma cooperativa para adiminastração dos fluxos da cidade.',
  },
  {
    id: 4,
    titulo: 'Aprendizado e machine Learning com IA e ChatGPT',
    instituicao: 'Alura',
    periodo: '2025',
    tipo: 'Curso',
    descricao:
      'Formação complementar em machine learning, ferramentas IA e integrações de banco de dados.',
  },
]

export const O_SOBRE = {
  titulo: 'Quem sou eu e o que já fiz',
  texto:
    'Sou Jean, desenvolvedor web apaixonado por experiências digitais que combinam dados, mapas e usabilidade. Já participei de projetos institucionais e integradores voltados a cívica, comércio local e educação preparatória.',
  destaques: [
    'Equipe multidisciplinar em desenvolvimento de sistemas web.',
    'Projetos entregues com foco em mapas interativos e relatórios visuais.',
    'Atuação com PHP, React, MySQL, Leaflet.js e integrações de IA.',
  ],
}