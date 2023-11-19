// import React from 'react';
import { useState } from 'react';

const Input = (props: any) => {
  const changeVal = (e: string) => props.changeVal(e);
  return (
    <div>
      <input type="text" value={props.modelVal} onChange={(e) => changeVal(e.target.value)} />
    </div>
  );
};

function ButTon(props: any) {
  return <div className="btn">{props.btnName || '请对输入框赋值'}</div>;
}

function App() {
  const [inputVal, setInputVal] = useState('');
  const handlerVal = (data: string) => setInputVal(data);
  return (
    <div className="App">
      <ButTon info={{ name: '123' }} btnName={inputVal}></ButTon>
      <Input modelVal={inputVal} changeVal={handlerVal}></Input>
    </div>
  );
}

export default App;
