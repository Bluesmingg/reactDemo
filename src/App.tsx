import React, { useEffect, useState } from 'react';
import { refresh } from './hooks/useTool';
import { Button } from 'antd';
type anyType = {
  [index: string]: any;
};
const Input: React.FC<anyType> = (props: anyType) => {
  const changeVal = (e: string) => props.changeVal(e);
  return <input type="text" value={props.modelVal} onChange={(e) => changeVal(e.target.value)} />;
};
const ButTon: React.FC<anyType> = (props: anyType) => {
  return <div className="btn">{props.btnName || '请对输入框赋值'}</div>;
};

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const { onRefresh } = refresh();
  const handlerVal = (data: string) => setInputVal(data);
  useEffect(
    () => {
      console.log(1);
      return () => {
        // 执行卸载操作，组件卸载时执行
      };
    },
    [] // 添加依赖项,类似vue中watch
  );

  return (
    <div className="App">
      <ButTon info={{ name: '123' }} btnName={inputVal}></ButTon>
      <Input modelVal={inputVal} changeVal={handlerVal}></Input>
      <Button onClick={onRefresh}>ant按钮-{Date.now()}</Button>
    </div>
  );
};

export default App;
