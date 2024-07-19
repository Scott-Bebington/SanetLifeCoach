import React, { useState } from 'react';

const Navbar = () => {
  const [currentTab, setTab] = useState("Home");

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setTab(tab);

    // Scroll to the corresponding section
    const sectionId = tab.toLowerCase().replace(/ /g, "-");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='w-full flex justify-between items-center shadow-md h-12 px-10 bg-white' style={{ position: 'fixed', top: 0 }}>
      <h1>Logo</h1>
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
