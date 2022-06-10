//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images

import Project1 from './assets/img/projects/project-1.PNG';


import Project2 from './assets/img/projects/project-2.PNG';
import Project3 from './assets/img/projects/project-3.PNG';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [

  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mdsayed204/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/sayedhasan019283',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [

  {
    id: '1',
    image: Project1,
    name: 'Fullstack project',
    category: 'web development',
    p: ' I have implemented an authentication system using firebase code,● Designed many components, and also worked on reusable ● User can update their product quantity after login and one more important thing is users can addproducts.',
    link: 'https://fitness-gym-9e553.web.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Fullstack project',
    category: 'web development',
    p: ' I have implemented an authentication system using firebase code Designed many components, and also worked on reusable. User can update their product quantity after login and one more important thing is users can addproducts. And this data is stored on the MongoDB server.',
    link: 'https://assignment-11-39865.web.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Fullstack project',
    category: 'web development',
    p: '● I have implemented an authentication system using firebase, ● If a user wants to take a service, he needs to sign up or log in first.● After login user can visit the protected route Technology: React, React Router, Firebase, Bootstrap 5, Firebase Hook',
    link: 'https://assignment-12-86f99.web.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'web development',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at sayedhasan019283@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
