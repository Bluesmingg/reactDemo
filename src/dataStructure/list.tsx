import React from 'react';

const List: React.FC = () => {
  class List<T> {
    queue: Map<number, T>;
    index: number;
    tempHeadMap: IterableIterator<number>;
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
  const listInit = new List([]);
  console.log(listInit);
  return (
    <>
      <div>list</div>
      <div></div>
    </>
  );
};
export default List;
