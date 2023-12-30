import React, { useEffect, useRef, useState } from 'react';

const Animation: React.FC = (props: any) => {
  const [isShow, setIsShow] = useState(true);
  const animation = (duration: any, from: any, to: any, onProgress: any) => {
    const distance = to - from;
    const speed = distance / duration;
    const startTime = Date.now();
    let value = from; // 当前值
    onProgress(value);
    function run() {
      const now = Date.now();
      const time = now - startTime;
      if (time >= duration) {
        value = to;
        onProgress(value);
        return;
      }
      const runDistance = time * speed;
      value = from + runDistance;
      onProgress(value);
      return requestAnimationFrame(run);
    }
    return requestAnimationFrame(run);
  };
  const domRef: any = useRef(null);
  //   const timerRef: any = useRef(null);
  const dataList = [123, 456, 789, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113];
  useEffect(() => {
    let animationId: any = null;
    let timer: any = setInterval(() => {
      animationId = animation(5000, 0, domRef.current.scrollHeight - domRef.current.clientHeight, (val: number) => {
        domRef.current && (domRef.current.scrollTop = val);
      });
    }, 5000);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(animationId);
      timer = null;
    };
  }, []);
  return (
    <>
      {isShow && (
        <div
          ref={domRef}
          style={{
            //   display: 'none',
            backgroundColor: 'rgba(10,50,222,.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100px',
            height: '100px',
            overflowY: 'auto',
            marginTop: '20px',
            marginLeft: '200px',
            padding: '20px'
          }}>
          <div style={{ width: '100%', height: 'auto' }}>
            {dataList.map((item) => {
              return <div key={item}>{item}</div>;
            })}
          </div>
        </div>
      )}
      <div onClick={() => setIsShow(!isShow)}>点击清除</div>
    </>
  );
};
export default Animation;
