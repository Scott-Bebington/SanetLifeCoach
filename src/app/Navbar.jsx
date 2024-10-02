import React, { useState, useEffect } from 'react';

const Navbar = ({ currentSection }) => {
  const [currentTab, setTab] = useState("Home");

  const handleTabClick = (event, tab) => {
    event.preventDefault();

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

  return (
    <nav className='w-full flex justify-between items-center shadow-md h-12 px-10 bg-white' style={{ position: 'fixed', top: 0 }}>
      <img src='/images/Logo-cropped.png' className='h-10' alt='Logo' />
      <ul className='flex gap-10'>
        {["Home", "My Style", "Life Coaching", "CBT", "Background", "Contact"].map(tab => (
          <li key={tab}>
            <button
              className={`cursor-pointer ${currentTab === tab ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary`}
              onClick={(e) => handleTabClick(e, tab)}
              aria-current={currentTab === tab ? 'page' : undefined}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
