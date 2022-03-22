class Stack {
  public items: number[];
  public top: number;

  constructor() {
    this.items = [];
    this.top = -1;
  }

  get peek() {
    return this.items[this.top];
  }

  push(item: number) {
    this.items[++this.top] = item;
  }

  pop() {
    this.top = this.top - 1;
    return this.items[this.top];
  }
}

describe('My Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can push to the top', () => {
    // Act
    stack.push(1);

    // Assert
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(1);
  });

  it('can pop off', () => {
    // Act
    stack.push(1);
    stack.push(2);
    stack.pop();

    // Assert
    expect(stack.peek).toBe(1);
  });

  it('is created empty', () => {
    // Assert
    expect(stack.top).toBe(-1);
  });
});
