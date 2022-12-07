import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Arena from './components/Arena';
import Footer from './components/Footer';
import BootstrapCarousel from './components/BootstrapCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {
    const [currentTab, setCurrentTab] = useState("home");
  
    const renderTab = () => {
      switch (currentTab) {
        case "home":
          return <Home />;

          case "arena":
            return <Arena />;
          default:
            return null;
      }
  };
  return (
    <div>
      <div>

        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>

      <BootstrapCarousel />
      <div>
        <main>{renderTab()}</main>

      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
