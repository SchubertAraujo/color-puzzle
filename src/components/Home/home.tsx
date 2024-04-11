import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TableGame } from '../TableGame/index.tsx';
import { Menu } from '../Menu/index.tsx';
import { About } from '../About/index.tsx';

function Home(): React.JSX.Element {
  return (
    <Router>
      <>
        <Menu />
        <div className="background-img">
          <Routes>
            <Route path="/" Component={About} />
            <Route path="/Game" Component={TableGame} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default Home;
