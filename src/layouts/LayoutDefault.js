import React, { useState }  from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ButtonGroup, Button } from 'semantic-ui-react';

const LayoutDefault = ({ children }) => {
  const [showHomePage, setShowHomePage] = useState(true);

  console.log("render", showHomePage);
  const toggleHomePage = () => {
    setShowHomePage(true);
  };
  
  return (
    <>
      { !showHomePage && <div className="reveal-from-bottom" data-reveal-delay="600">
        <ButtonGroup>
          <Button color="primary" onClick={toggleHomePage}>
            Click Here ! :)
          </Button>
        </ButtonGroup>
      </div> }
      { showHomePage && 
      <>
      {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
      <main className="site-content">
        {children}
      </main>
      <Footer />
      </> }
    </>
  );
};

export default LayoutDefault;  