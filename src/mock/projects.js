import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Extra',
    value: PROJECT_CATEGORY.EXTRA,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://www.cariboutests.com/images/logo/logo_en.svg',
    title: 'Caribou Math',
    techIcons: [
     
    ],
    description:
      'The Caribou Mathematics Competition is a world wide online contest that is held six times throughout the school year.',
   
    category: [PROJECT_CATEGORY.EXTRA, PROJECT_CATEGORY.EXTRA],
  },
  {
    imgSrc: 'https://tr.rbxcdn.com/6d49909bc0eac2dd9ef352191f9177e8/420/420/Hat/Webp',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: '',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/Ruggyy/group1_EcoTrace/refs/heads/main/public/logo.png?token=GHSAT0AAAAAACWON7ALA7TUXHBKGC5GHHR6ZYNUZZA',
    title: 'EcoTrace',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      {
        label: 'Next.js',
        icon: 'logos:java',
      },
  
    ],
    description:
      'The Carbon Footprint Tracker is a web app that helps users assess the environmental impact of their food by simply taking a picture of their meal. Using advanced image recognition technology, it provides an estimate of the carbon footprint and suggests more sustainable alternatives.',
    repoLink: 'https://github.com/Ruggyy/group1_EcoTrace',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://az632705.vo.msecnd.net/cmsroot/jupitermusic/media/jupiter-media/products/woodwinds/jaf1100e/angle1/jaf1100e_1.jpg',
    title: 'Concert Band "Flute"',
    techIcons: [

    ],
    description: 'As a flutist in the concert band, you bring a unique blend of agility and warmth to the ensembles sound. Your skillful fingerwork and breath control allow you to navigate intricate melodies with ease, captivating both the audience and your fellow musicians. With a passion for collaboration, you contribute to the rich tapestry of harmonies and rhythms, making each performance a memorable experience',
   
    category: [PROJECT_CATEGORY.EXTRA],
  },
];
