import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='Navback'>
      <ul className="nav nav-tabs">
        <li className="nav-item" id='homebtn'>
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}


            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item" id='aboutmebtn'>
          <a
            href="#aboutme"
            onClick={() => handlePageChange('aboutMe')}


            className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item" id='portbtn'>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('pastWork')}


            className={currentPage === 'pastWork' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item" id='contactbtn'>
          <a
            href="#contactInfo"

            onClick={() => handlePageChange('contactInfo')}
            className={currentPage === 'ContactInfo' ? 'nav-link active' : 'nav-link'}
          >
            Contact Information
          </a>
        </li>
        <li className="nav-item" id='resumebtn'>
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}


            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            My Resume
          </a>
        </li>
      </ul>

    </div>
  );
}

export default NavTabs;
