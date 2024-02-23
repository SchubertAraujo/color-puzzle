import React, { useEffect } from 'react';
import './style.css';

export function Home(): React.JSX.Element {
  const renderTableGame = (): Array<React.JSX.Element> => {
    const elements: React.JSX.Element[] = [];
    for (let i: number = 0; i < 9; i += 1) {
      elements.push(<div key={i}>{i}</div>);
    }
    return elements;
  };

  useEffect(() => {
    renderTableGame();
  }, []);
  return <div className="table-game">{renderTableGame()}</div>;
}
