import React from 'react';

const Queue: React.FC = () => {
  // 队列
  class Queue<T> {
    queue: Map<number, T>;
    index: number;
    readonly tempHeadMap: IterableIterator<number>;
    constructor(queue: T[]) {
      this.queue = new Map();
      this.tempHeadMap = this.queue.keys();
      this.index = queue.length; // 获取数组长度
      queue.forEach((item, index) => {
        this.queue.set(index, item);
      });
    }
    // // 添加一个元素到队列尾部
    enqueue(element: T): void {
      this.queue.set(this.index++, element);
      return;
    }
    // // 删除并返回是否删除成功
    outqueue(): boolean {
      return this.queue.delete(this.tempHeadMap.next().value);
    }
    // // 返回队列头部元素
    front(): string {
      let frontItem: string = '';
      for (const [key] of this.queue) {
        frontItem = this.queue.get(key) as string;
        break;
      }
      return frontItem;
    }
    // // 判断栈里是否有元素
    isEmpty(): boolean {
      return Boolean(this.queue.size);
    }
    // // 返回栈中元素个数
    size(): number {
      return this.queue.size;
    }
  }

  // 优先级队列
  class PriorityQueue<T, K> extends Queue<T> {
    priority: number; // 优先级
    constructor(queue: T[], priority: number) {
      super(queue);
      this.priority = priority;
    }
  }
  const initPriortyQueue = new PriorityQueue(['蓝蓝', '程程', '黄黄', '绿绿', '紫紫', '白白', '红红'], 100);
  console.log(initPriortyQueue);
  // 击鼓传花
  // const playGame = (nameList: string[], count: number) => {
  //   const list = new Queue(nameList);
  //   while (list.size() > 1) {
  //     for (let i = 0; i < count - 1; i += 1) {
  //       list.enqueue(list.front()); // 将第一个元素添加到队列末尾
  //       list.outqueue(); // 删除第一个元素
  //     }
  //     list.outqueue();
  //   }
  //   console.log(list);
  // };

  // playGame(['蓝蓝', '程程', '黄黄', '绿绿', '紫紫', '白白', '红红'], 2);
  return (
    <>
      <div>queue</div>
      <div></div>
    </>
  );
};
export default Queue;
