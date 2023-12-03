import React, { useState, useMemo } from 'react';
import { refresh } from './hooks/useTool';
import { Button } from 'antd';
import type { PaginationProps } from 'antd';
import { Pagination, Calendar, Select, theme } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

type anyType = {
  [index: string]: any;
};
const Input: React.FC<anyType> = (props: anyType, ref: any) => {
  const changeVal = (e: string) => props.changeVal(e);
  return <input type="text" ref={ref} value={props.modelVal} onChange={(e) => changeVal(e.target.value)} />;
};
const ButTon: React.FC<anyType> = (props: anyType) => {
  return <div className="btn">{props.btnName || '请对输入框赋值'}</div>;
};
const ForwardedInput = React.forwardRef(Input as anyType as any) as any;

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const { onRefresh } = refresh();
  const inputRef = React.createRef() as any;
  const getRef = () => inputRef.current?.focus();
  const handlerVal = (data: string) => setInputVal(data);
  // 分页器
  const [current, setCurrent] = useState(1);
  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const memoRes: any = useMemo(() => {
    return Date.now();
  }, [current]);

  // 生成器
  const [iteratorNumber, setIteratorNumber] = useState(0);
  const handlerBaseBtnFn = (num: number) => {
    setIteratorNumber(num + 1);
  };

  // 下拉框数据
  const [selectMonth, setSelectMonth] = useState(0);
  /**
   * 数据传入格式
   * [{ date:12, content:'迟到' }, {date:20, content:'请假'}]
   */
  const sourceData = [
    { date: 12, content: '迟到' },
    { date: 20, content: '请假' },
    { date: 1, content: '旷工' },
    { date: 26, content: '休息' }
  ];
  const getListData = (value: Dayjs, data: any[]) => {
    let listData: any;

    if (value.month() !== selectMonth || value.year() !== new Date().getFullYear()) return;
    // 定义颜色映射关系
    const dateMap = new Map([
      ['旷工', 'red'],
      ['缺卡', 'red'],
      ['请假', 'orange'],
      ['迟到', 'orange'],
      ['早退', 'orange'],
      ['休息', 'blue']
    ]);
    // 设置自定义默认值
    listData = value.date();
    data.forEach((item) => {
      if (item.date === value.date()) {
        listData = [{ content: item.content, color: dateMap.get(item.content) }];
      }
    });
    return listData || [];
  };

  const onPanelChange = (val: any) => {
    console.log('🚀 ~ file: App.tsx:104 ~ onPanelChange ~ val:', val);
  };
  // 自定义日历单元格
  const cellRender: any = (current: any, info: any) => {
    const listData = getListData(current, sourceData);
    const [activeName, setActive] = useState(false);
    // 自定义点击高亮样式
    const handlerHighlightItem = (e: any, color: string) => {
      console.log('🚀 ~ file: App.tsx:89 ~ handlerHighlightItem ~ e:', e);
      setActive(!activeName);
      e.target.style = activeName ? `color:${color}` : 'color:#000'; // 使用className会导致层级不够 ;background-color:${color}
    };

    return Array.isArray(listData)
      ? listData.map((item) => (
          <div
            className=""
            key={item?.content || ''}
            style={{ color: item.color }}
            onClick={(e) => handlerHighlightItem(e, item.color)}>
            <span style={{ userSelect: 'none' }}>{item?.content || ''}</span>
          </div>
        ))
      : info.originNode;
  };
  // 下拉框
  const handleChange = (value: any) => {
    setSelectMonth(value);
  };
  const { token } = theme.useToken();
  const wrapperStyle: React.CSSProperties = {
    width: 600,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG
  };
  return (
    <>
      <Select
        style={{ width: 600 }}
        onChange={handleChange}
        options={[
          { label: 'assk', value: 0 },
          { label: 'assy', value: 1 },
          { label: 'inhe', value: 2 },
          { label: 'ab44', value: 3 },
          { label: 'ab55', value: 4 },
          { label: 'ab66', value: 5 },
          { label: 'ab77', value: 6 },
          { label: 'ab88', value: 7 },
          { label: 'ab99', value: 8 },
          { label: 'ab10', value: 9 },
          { label: 'ab11', value: 10 },
          { label: 'ab12', value: 11 }
        ]}
        value={selectMonth}
      />
      <div className="calendarBox" style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          fullCellRender={cellRender}
          onPanelChange={onPanelChange}
          defaultValue={dayjs()}
          headerRender={() => <></>} // 隐藏自带下拉框
          value={dayjs().month(selectMonth)}
        />
        ;
      </div>
    </>
  );

  return (
    <div className="App">
      <ButTon info={{ name: '123' }} btnName={inputVal}></ButTon>
      <ForwardedInput ref={inputRef} modelVal={inputVal} changeVal={handlerVal}></ForwardedInput>
      <Button onDoubleClick={onRefresh} onClick={getRef}>
        ant按钮-{Date.now()} <br />
        ant按钮-{memoRes}
      </Button>
      <br />
      <BaseBtn onClick={() => handlerBaseBtnFn(iteratorNumber)}>{iteratorNumber}</BaseBtn>
      <BaseBtn onClick={() => handlerBaseBtnFn(22)}>播放音乐</BaseBtn>
      <br />
      <Pagination current={current} onChange={onChange} total={100} />
      <div style={{ width: 400, height: 400 }}></div>
      <br />
    </div>
  );
};

const BaseBtn: React.FC<anyType> = ({ onClick, children }) => {
  const btnStyle = {
    backgroundColor: 'red',
    width: '100px',
    height: '50px',
    color: 'black'
  };
  return (
    <>
      <button style={btnStyle} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default App;
