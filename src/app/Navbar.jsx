import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu'; // Import a menu icon for the dropdown


const Navbar = ({ currentSection }) => {
  const [currentTab, setTab] = useState("Home");
  const [menuOpon, setMenuOpen] = useState(false);

  const handleTabClick = (event, tab) => {

    if (event != null) {
      event.preventDefault();
    }

    // Scroll to the corresponding section
    const sectionId = tab.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update currentTab when the currentSection prop changes
  useEffect(() => {
    setTab(currentSection);
  }, [currentSection]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpon);

    if (!menuOpon) {
      document.getElementById('navbar-top-bar').classList.add('rotate-navbar-top');
      document.getElementById('navbar-middle-bar').classList.add('rotate-navbar-middle');
      document.getElementById('navbar-bottom-bar').classList.add('rotate-navbar-bottom');

      document.getElementById('navbar-top-bar').classList.remove('reverse-navbar-top');
      document.getElementById('navbar-middle-bar').classList.remove('reverse-navbar-middle');
      document.getElementById('navbar-bottom-bar').classList.remove('reverse-navbar-bottom');
    } else {
      document.getElementById('navbar-top-bar').classList.add('reverse-navbar-top');
      document.getElementById('navbar-middle-bar').classList.add('reverse-navbar-middle');
      document.getElementById('navbar-bottom-bar').classList.add('reverse-navbar-bottom');

      document.getElementById('navbar-top-bar').classList.remove('rotate-navbar-top');
      document.getElementById('navbar-middle-bar').classList.remove('rotate-navbar-middle');
      document.getElementById('navbar-bottom-bar').classList.remove('rotate-navbar-bottom');
    }
  };

  return (
    <>
      <nav className='w-full flex justify-between items-center shadow-md h-12 px-10 z-10 bg-white' style={{ position: 'fixed', top: 0 }}>
        <img src='/images/Logo-cropped.png' className='h-10' alt='Logo' />
        <ul className='flex gap-10'>
          {["Home", "My Style", "Life Coaching", "CBT", "Background", "Contact"].map(tab => (
            <li key={tab}>
              <button
                className={`cursor-pointer ${currentTab === tab ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary`}
                onClick={(e) => handleTabClick(e, tab)}
                aria-current={currentTab === tab ? 'page' : undefined}
                style={{ textTransform: 'capitalize' }}
              >
                {tab.toLowerCase()}
              </button>
            </li>
          ))}
        </ul>
        <Button
          variant='contained'
          className='bg-primary hover:bg-secondary p-1 px-2'
          onClick={(e) => handleTabClick(null, "Contact")}
          style={{ textTransform: 'capitalize' }}
        >
          Get Started
        </Button>
      </nav>

      <nav className='w-full justify-between flex items-center shadow-md h-12 px-10 z-10 bg-white lg:hidden' style={{ position: 'fixed', top: 0 }}>
        <img src='/images/Logo-cropped.png' className='h-10' alt='Logo' />
        <button onClick={toggleMenu} className='space-y-1'>
          {/* <MenuIcon fontSize="large" /> */}
          <div
            id='navbar-top-bar'
            className="w-6 h-[3px] bg-primary rounded-full"
          ></div>
          <div
            id='navbar-middle-bar'
            className="w-6 h-[3px] bg-primary rounded-full"
          ></div>
          <div
            id='navbar-bottom-bar'
            className="w-6 h-[3px] bg-primary rounded-full"
          ></div>
        </button>

        {menuOpon && (
          <>
            <ul className="absolute top-12 right-0 bg-white shadow-md rounded-lg py-2 px-6 w-full flex flex-col items-start space-y-2 lg:hidden">
              {["Home", "My Style", "Life Coaching", "CBT", "Background", "Contact"].map(tab => (
                <li key={tab}>
                  <button
                    className={`block w-full text-left px-4 py-2 ${currentTab === tab ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary`}
                    onClick={(e) => {
                      handleTabClick(e, tab);
                      toggleMenu(); // Close menu after clicking
                    }}
                    aria-current={currentTab === tab ? 'page' : undefined}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {tab.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>

          </>

        )}



      </nav>
    </>

  );
};

export default Navbar;
