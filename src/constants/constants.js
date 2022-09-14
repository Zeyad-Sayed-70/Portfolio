let init = 0
const id = () => {
  return init++
}

export const projects = [
  {
    title: 'Besnik.',
    description: "Besnik. is a awesome Agency landing page, full responsive & beautiful design with Animations.",
    image: './images/8.png',
    tags: ["Html", "Css", "Javascript", "Bootstrap"],
    titleContent: 'Landing Page',
    source: 'https://github.com/Zeyad-Sayed-70/Besnik.',
    visit: 'https://besnik2.netlify.app/',
    id: id(),
  },
  {
    title: 'Facebook Clone',
    description: "Maybe this project will be bigger than any project that i did, it's still version 1.0, everyone know facebook, simply it's social media website, you can share your Stories, Posts and more to world and your friends, there will be new versions to add new feautures.",
    image: '/images/5.webp',
    tags: ['React', 'Node', 'Mongo', 'Express'],
    titleContent: 'Social Media',
    source: 'https://github.com/Zeyad-Sayed-70/Facebook-Clone',
    visit: 'https://eg-facebook.netlify.app/',
    id: id(),
  },
  {
    title: 'Chat App',
    description: "full Realtime chat Application, you can Message your friends in private rooms or create global one then can people join with you.",
    image: '/images/6.png',
    tags: ['React', 'Socket', 'Mongo', 'Node', 'Express'],
    titleContent: 'Chat Application',
    source: 'https://github.com/Zeyad-Sayed-70/unichat',
    visit: 'https://aesthetic-taffy-805d34.netlify.app/',
    id: id(),
  },
  {
    title: 'E-Commerce',
    description:"Phanox is a online store web appllication with payments using Stripe, I use MERN Stack to do it, it's still version 1.0.0",
    image: '/images/2.png',
    tags: ['React', 'Stripe', 'Node', 'Mongo', 'Express'],
    titleContent: 'Online Store',
    source: 'https://github.com/Zeyad-Sayed-70/phanox',
    visit: 'https://phanox-store.netlify.app',
    id: id(),
  },
  {
    title: 'Surprise Shop',
    description:"Furniture e-commerce with Categories for products, Wish List, Sign In, Checkout, etc...",
    image: './images/11.png',
    tags: ['React', 'React Bootstrap', 'Json', 'Css'],
    titleContent: 'Online Store Design',
    source: 'https://github.com/Zeyad-Sayed-70/E-Commerce-Project',
    visit: 'https://dreamy-liger-b73763.netlify.app/',
    id: id(),
  },
  {
    title: 'Bondi',
    description:"responsive and clean landing page website.",
    image: './images/10.png',
    tags: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    titleContent: 'Landing Page',
    source: 'https://github.com/Zeyad-Sayed-70/Bondi',
    visit: 'https://extraordinary-fenglisu-3f84ad.netlify.app/',
    id: id(),
  },
  {
    title: 'ConsultBiz',
    description:"Creative & flexable, full responsive landing website with Animations.",
    image: './images/9.png',
    tags: ['Html', 'Css', 'Javascript'],
    titleContent: 'Landing Page',
    source: 'https://github.com/Zeyad-Sayed-70/ConsultBiz',
    visit: 'https://deluxe-maamoul-cbc221.netlify.app/',
    id: id(),
  },
  {
    title: 'Memorize',
    description: "Memorize is Social media app to share your memories to the world, I use MERN Stack to do it.",
    image: '/images/7.png',
    tags: ['Mongo', 'Express', 'React', 'Node'],
    titleContent: 'Social Media',
    source: 'https://github.com/Zeyad-Sayed-70/Memorize',
    visit: 'https://memorize-eg.netlify.app',
    id: id(),
  },
];

export const TimeLineData = [
  { year: 2021, text: 'Started my journey', },
  { year: 2022, text: 'Became Mern Stack Developer', },
];