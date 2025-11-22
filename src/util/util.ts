export function waitForElement(selector: string, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      if (Date.now() - startTime > timeout) {
        reject(new Error('Element not found'));
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}