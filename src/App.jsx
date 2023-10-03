// Your main component
import { useState, useEffect } from 'react';
import Nav from './nav.jsx';
import { Full, _in } from './style.js';
import Body from './body.jsx';
import Projects from './Projects.jsx';
import About from './about.jsx'

export default () => {
  const [navVisible, setNavVisible] = useState(true);
  let lastScroll = 0;

  const handleScroll = () => {
    const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolltop > lastScroll) {
      // Scrolling down
      setNavVisible(false);
      
    }
    else {
      // Scrolling up
      setNavVisible(true);
    }

    lastScroll = scrolltop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Full>
      <_in>
        {navVisible && <Nav/>}
        <Body />
        <Projects />
        <About />
      </_in>
    </Full>
  );
};
