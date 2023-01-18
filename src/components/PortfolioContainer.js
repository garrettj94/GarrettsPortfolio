import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/aboutMe';
import Past from './pages/pastWork';
import Contact from './pages/contactInfo';
import Resume from './pages/Resume';
import Footer from './pages/footer';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'aboutMe') {
      return <About />;
    }
    if (currentPage === 'pastWork') {
      return <Past />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <mai>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div >
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </mai>
  );

}
