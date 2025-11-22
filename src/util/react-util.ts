// React Fiber 相关类型定义
interface ReactFiber {
  tag: number;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;
  return: ReactFiber | null;
  child: ReactFiber | null;
  sibling: ReactFiber | null;
  index: number;
  ref: any;
  pendingProps: any;
  memoizedProps: any;
  updateQueue: any;
  memoizedState: any;
  dependencies: any;
  mode: number;
  effectTag: number;
  nextEffect: ReactFiber | null;
  firstEffect: ReactFiber | null;
  lastEffect: ReactFiber | null;
  lanes: any;
  childLanes: any;
  alternate: ReactFiber | null;
}

// React 事件处理器类型
type ReactEventHandler<T = any> = (event: T) => void;

// 事件处理器集合类型
interface ReactEventHandlers {
  onChange?: ReactEventHandler;
  onInput?: ReactEventHandler;
  onBlur?: ReactEventHandler;
  onFocus?: ReactEventHandler;
  value?: any;
}

// React 实例类型（可能是 Fiber 或其他内部实例）
type ReactInstance = ReactFiber | any;

// DOM 元素类型
type HTMLElementWithReact = HTMLElement & {
  [key: string]: any; // 用于访问 __react* 属性
};

// 事件配置类型
interface EventConfig {
  type: string;
  options: EventInit & Record<string, any>;
}

/**
 * 获取 React 实例
 * @param element DOM 元素
 * @returns React 实例或 null
 */
function getReactInstance(element: HTMLElementWithReact): ReactInstance | null {
  for (const key in element) {
    if (key.startsWith('__reactInternalInstance$') ||
        key.startsWith('__reactFiber$') ||
        key.startsWith('__reactProps$')) {
      return element[key];
    }
  }
  return null;
}

/**
 * 查找 React 事件处理器
 * @param reactInstance React 实例
 * @returns 事件处理器对象
 */
function findReactEventHandlers(reactInstance: ReactInstance): ReactEventHandlers {
  const handlers: ReactEventHandlers = {};
  let fiber: ReactFiber | null = reactInstance as ReactFiber;
  let depth = 0;
  
  while (fiber && depth < 10) {
    const props = fiber.memoizedProps || fiber.pendingProps;
    if (props) {
      if (props.onChange && !handlers.onChange) handlers.onChange = props.onChange;
      if (props.onInput && !handlers.onInput) handlers.onInput = props.onInput;
      if (props.onBlur && !handlers.onBlur) handlers.onBlur = props.onBlur;
      if (props.onFocus && !handlers.onFocus) handlers.onFocus = props.onFocus;
      if (props.value !== undefined && !handlers.value) handlers.value = props.value;
    }
    
    // 检查 stateNode
    if (fiber.stateNode && fiber.stateNode.props) {
      const nodeProps = fiber.stateNode.props;
      if (nodeProps.onChange && !handlers.onChange) handlers.onChange = nodeProps.onChange;
      if (nodeProps.onInput && !handlers.onInput) handlers.onInput = nodeProps.onInput;
    }
    
    fiber = fiber.return;
    depth++;
  }
  
  return handlers;
}

/**
 * 创建 React 风格的事件对象
 * @param type 事件类型
 * @param target 事件目标
 * @returns React 风格的事件对象
 */
function createReactLikeEvent(type: string, target: HTMLElement): any {
  const nativeEvent = new Event(type, {
    bubbles: true,
    cancelable: true,
  });
  
  // 添加 React 期望的属性
  const reactEvent = {
    ...nativeEvent,
    target: target,
    currentTarget: target,
    nativeEvent: nativeEvent,
    persist: function() {},
    isDefaultPrevented: function() { return false; },
    isPropagationStopped: function() { return false; },
    preventDefault: function() { nativeEvent.preventDefault(); },
    stopPropagation: function() { nativeEvent.stopPropagation(); },
  };
  
  return reactEvent;
}

/**
 * 尝试所有 React 方法设置值
 * @param input 输入元素
 * @param value 要设置的值
 * @param handlers 事件处理器
 * @returns 是否成功设置值
 */
function tryAllReactMethods(
  input: HTMLInputElement, 
  value: string, 
  handlers: ReactEventHandlers
): boolean {
  // 设置值
  input.value = value;
  
  // 方法1: 直接调用 onChange
  if (handlers.onChange) {
    try {
      const fakeEvent = createReactLikeEvent('change', input);
      handlers.onChange(fakeEvent);
      return true;
    } catch (e) {
      console.error('onChange调用失败:', e);
    }
  }
  
  // 方法2: 调用 onInput
  if (handlers.onInput) {
    try {
      const fakeEvent = createReactLikeEvent('input', input);
      handlers.onInput(fakeEvent);
      return true;
    } catch (e) {
      console.error('onInput调用失败:', e);
    }
  }
  
  return false;
}

/**
 * 使用原生事件组合设置值
 * @param input 输入元素
 * @param value 要设置的值
 */
function setValueWithNativeEvents(input: HTMLInputElement, value: string): void {
  // 精确的事件序列
  const events: EventConfig[] = [
    { type: 'focus', options: { bubbles: true } },
    { type: 'input', options: { bubbles: true, inputType: 'insertText' } },
    { type: 'change', options: { bubbles: true } },
  ];
  
  // 先设置值
  input.value = value;
  
  // 按顺序触发事件
  events.forEach(eventDesc => {
    try {
      const event = new Event(eventDesc.type, eventDesc.options);
      
      // 为 input 事件添加属性
      if (eventDesc.type === 'input') {
        Object.assign(event, {
          inputType: 'insertText',
          data: value,
          dataTransfer: null,
          isComposing: false
        });
      }
      
      input.dispatchEvent(event);
    } catch (e) {
      console.error(`事件 ${eventDesc.type} 失败:`, e);
    }
  });
}

/**
 * 主要的设置输入值函数
 * @param input 输入元素
 * @param value 要设置的值
 */
export function setReactInputValue(input: HTMLInputElement, value: string): void {
  // 先 focus
  input.focus();
  
  // 使用 React 内部方法设置
  const reactInstance = getReactInstance(input);
  if (reactInstance) {
    // 查找所有可能包含事件处理器的 fiber
    const eventHandlers = findReactEventHandlers(reactInstance);
    
    // 尝试不同的设置方法
    const success = tryAllReactMethods(input, value, eventHandlers);
    if (success) {
      return;
    }
  }
  
  // 如果 React 方法失败，则使用原生事件组合
  setValueWithNativeEvents(input, value);
}