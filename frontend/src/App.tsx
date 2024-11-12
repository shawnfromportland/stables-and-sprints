// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Usertable from './Usertable';
import RaceComponent from './Race';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <img src="/jockey.png" alt="races app" style={{ width: '100%', height: 'auto' }} />
        
        {/* Top navigation link */}
        <nav style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/" style={{ marginRight: '20px', fontSize: '18px', textDecoration: 'none', color: '#2a5a32' }}>
            Profile
          </Link>
          <Link to="/races" style={{ marginRight: '20px', fontSize: '18px', textDecoration: 'none', color: '#2a5a32' }}>
            Races
          </Link>
        </nav>

        {/* Define routes for components */}
        <Routes>
          <Route path="/" element={<Usertable />} />
          <Route path="/races" element={<RaceComponent />} />
        </Routes>

        {/* Bottom navigation link */}
        <nav style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '20px', fontSize: '18px', textDecoration: 'none', color: '#2a5a32' }}>
            Profile
          </Link>
          <Link to="/races" style={{ fontSize: '18px', textDecoration: 'none', color: '#2a5a32' }}>
            Races
          </Link>
        </nav>
      </div>
    </Router>
  );
};

export default App;
