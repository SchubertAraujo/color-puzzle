import React from 'react';
import { TableGame } from '../TableGame/index.tsx';
import { Menu } from '../Menu/index.tsx';

function Home(): React.JSX.Element {
  return (
    <>
      <Menu />
      <div className="background-img">
        <TableGame />
      </div>
    </>
  );
}

export default Home;
