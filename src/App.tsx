// import React from 'react';
import { SyntheticEvent } from 'react';

function ButTon() {
  const btnName: string = '点击我';
  const btnFn = (name: string, e: SyntheticEvent) => {
    e.stopPropagation();
    console.log(btnName + name);
  };
  return (
    <div className="btn" onClick={(e) => btnFn('lansiming', e)}>
      {btnName}
    </div>
  );
}

function App() {
  const handlerClick = (name: string) => {
    console.log(name);
  };
  return (
    <div className="App" onClick={() => handlerClick('lanlan')}>
      1123123
      <ButTon></ButTon>
    </div>
  );
}

export default App;
