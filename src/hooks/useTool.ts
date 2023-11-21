import { useState } from 'react';

function refresh(): any {
  // 模拟组件强制刷新
  const [, forceUpdate] = useState({});
  const onRefresh = () => forceUpdate({});
  return { onRefresh };
}

export { refresh };
