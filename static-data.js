const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

const skills = {
  express: { name: 'Express', logo: 'express.svg', padding: 10 },
  html5: { name: 'HTML', logo: 'html5.svg', padding: 5 },
  css3: { name: 'CSS', logo: 'css3.svg', padding: 5 },
  js: { name: 'JavaScript', logo: 'js.svg', padding: 4 },
  mongodb: { name: 'Mongo DB', logo: 'mongodb.svg', padding: 4 },
  nodejs: { name: 'Node', logo: 'nodejs.svg', padding: 4 },
  react: { name: 'React', logo: 'react.svg', padding: 3 },
  gatsby: { name: 'Gatsby', logo: 'gatsby.svg', padding: 0 },
  vuejs: { name: 'Vue.js', logo: 'vue.svg', padding: 3 },
  redux: { name: 'Redux', logo: 'redux.svg', padding: 9 },
  sass: { name: 'SASS', logo: 'sass.svg', padding: 5 },
  typescript: {
    name: 'Typescript',
    logo: 'typescript.svg',
    padding: 6
  }
};

const linkTypes = {
  github: 'github',
  demo: 'demo'
};

const projects = {
  WORK: [
    {
      title: 'Wings Suite',
      slug: 'wings-suite',
      duration: 'Sept 2018 - June 2019',
      org: 'Sandisk (Western Digital)',
      logo: 'wings-logo.png',
      videoLink: [
        {
          link: 'https://www.youtube.com/embed/QGOiqoEyhnY?start=54&autoplay=1',
          label: 'Wings Suite walkthrough',
          videoRatio: '71.7%'
        }
      ],
      skillSet: [
        skills.react,
        skills.redux,
        skills.typescript,
        skills.html5,
        skills.css3,
        skills.nodejs
      ],
      description: [
        `Wings Suite is an internal product for automation of processes related to firmware management & testing for storage devices. It enables firmware engineers to test storage devices from a web based interface in contrast to the existing system where they use command line tools to run these tests. Wings also allows them to save test suites, decode test results, manage properties of storage devices and perform failure analysis all from a user-friendly web portal.`
      ],
      responsibilities: [
        `Hired and managed a small team of frontend engineers & QA engineers.`,
        `Architected a scalable fronted development platform using React and Redux.`,
        `Developed mockups and performed user-experience studies with stakeholders.`,
        `Mentored two interns & trained them on Frontend development principles.`,
        `Developed guidlines for CI/CD & automated unit testing for the project.`
      ]
    },
    { title: 'XInsure', slug: 'xinsure' },
    { title: 'Instalment Billing', slug: 'instalment-billing' },
    { title: 'Obfuscation Engine', slug: 'obfuscation-engine' },
    { title: 'ErrorDumps', slug: 'error-dumps' }
  ],
  SIDE: [
    { title: 'Suppr', slug: 'suppr' },
    { title: 'Baadi', slug: 'baadi' },
    {
      title: 'Node File Logger',
      slug: 'node-file-logger',
      links: [
        { url: '', type: linkTypes.github },
        { url: '', type: linkTypes.demo }
      ]
    },
    {
      title: 'React Calendar',
      slug: 'https://github.com/routbisu/react-calendar',
      external: true
    },
    { title: 'Movie Hunt', slug: 'movie-hunt' }
  ]
};

module.exports = {
  projectTypes,
  skills,
  projects
};
