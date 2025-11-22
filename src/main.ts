import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

function insertApp() {
  const app = document.createElement('div');
  const targetElement = document.querySelector('[data-testid="workspace_icon"]');

  if (targetElement && targetElement.parentNode) {
    targetElement.parentNode.insertBefore(app, targetElement.nextSibling);
  } else {
    document.body.append(app);
  }

  return app;
}

const appContainer = insertApp();

// 轮询查找目标元素
const interval = setInterval(() => {
  const targetElement = document.querySelector('[data-testid="workspace_icon"]');
  if (targetElement && targetElement.parentNode) {
    // 移除旧的app容器
    if (appContainer.parentNode) {
      appContainer.parentNode.removeChild(appContainer);
    }
    // 插入到正确位置
    targetElement.parentNode.insertBefore(appContainer, targetElement.nextSibling);
    clearInterval(interval);
  }
}, 500);

// 设置超时防止无限轮询
setTimeout(() => clearInterval(interval), 10000);

createApp(App).mount(appContainer);