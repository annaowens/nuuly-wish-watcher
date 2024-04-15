// App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import FAQPage from './components/faqPage'; // Assuming you have a FAQ page component

const App: React.FC = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route path="/" exact component={LandingPage} />
      <Route path="/faq" component={FAQPage} />
    </Router>
  );
};

export default App;
