import ProfileImg from './assets/avatar-jessica.jpeg';
import GitHub from './assets/github.png';
import Mentor from './assets/mentor.png';
import LinkedIn from './assets/linkedIn.png';
import Twitter from './assets/twitter.png';
import Instagram from './assets/instagram.webp';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialMediaLinks = [
  {
    id: 1,
    name: 'GitHub',
    logo: GitHub,
    path: 'https://dev-lawrence.com/',
  },
  {
    id: 2,
    name: 'Frontend Mentor',
    logo: Mentor,
    path: 'https://frontendmentor.io/',
  },
  {
    id: 3,
    name: 'LinkedIn',
    logo: LinkedIn,
    path: 'https://www.linkedin.com/',
  },
  {
    id: 4,
    name: 'Twitter',
    logo: Twitter,
    path: 'https://twitter.com/',
  },
  {
    id: 5,
    name: 'Instagram',
    logo: Instagram,
    path: 'https://www.instagram.com/',
  },
];

const App = () => {
  const [selectedLink, setIsSelectedLink] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedLink = (selectedLink) => {
    setIsSelectedLink(selectedLink);

    if (selectedLink) {
      setIsSelected(!isSelected);
    }
  };

  const closeLink = () => {
    setIsSelected(false);
  };

  const selectedClassMap = {
    GitHub: 'github',
    'Frontend Mentor': 'mentor',
    LinkedIn: 'linkedin',
    Twitter: 'twitter',
    Instagram: 'instagram',
  };

  const selectedClassName = selectedClassMap[selectedLink.name || ''];

  return (
    <div className="container">
      <div className="profile-container">
        <img src={ProfileImg} alt="" />

        <div className="profile-info">
          <h1>Jessica Randall</h1>
          <span>London, United Kingdom</span>
        </div>

        <p className="text">Front-end developer and avid reader</p>

        <div className="buttons">
          {socialMediaLinks.map((link) => (
            <button
              key={link.id}
              className="button"
              onClick={() => handleSelectedLink(link)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Info details */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className={`profile-details ${selectedClassName}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="close" onClick={closeLink}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <div className="overlay"></div>

            <div className="selected-info">
              <motion.img
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.3 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedLink.logo}
                alt=""
              />

              <motion.p
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.5 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                I'm a frontend developer. I build seamless web experiences and
                web applications by transforming Figma and Adobe XD designs into
                real and usable websites and apps
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { type: 'tween', delay: 0.9 },
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="cta"
              >
                <a href={selectedLink.path}>Check out my bio</a>
              </motion.div>

              <div className="tag">{selectedLink.name}</div>

              <div className="author">Dev lawrence</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
