import React from 'react';

const Stack: React.FC = () => {
  class Stack<T> {
    stack: T[] = [];
    constructor(stack: T[]) {
      this.stack = stack;
    }
    // 添加一个元素到栈顶
    push(element: T) {
      return this.stack.push(element);
    }
    // 移除栈顶元素，并返回被移除的元素
    pop() {
      return this.stack.pop();
    }
    // 查看并返回栈顶元素
    peek() {
      return this.stack.at(-1);
    }
    // 判断栈里是否有元素
    isEmpty() {
      return this.stack.length === 0;
    }
    // 返回栈中元素个数
    size() {
      return this.stack.length;
    }
    // 将栈结构的内容转化为字符串
    toString() {
      return this.stack.map((item: T) => item + '');
      // return JSON.stringify(this.stack);
    }
  }
  const initStack = new Stack([1, 2, 3]);
  const res = initStack.toString();
  console.log(initStack, res);
  return (
    <>
      <div>stack</div>
      <div>{JSON.stringify(initStack)}</div>
    </>
  );
};
export default Stack;
