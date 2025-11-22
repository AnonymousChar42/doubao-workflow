export function waitForElement<T extends HTMLElement = HTMLElement>(selector: string, timeout = 5000): Promise<T> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const element = document.querySelector<T>(selector);
      if (element) {
        resolve(element);
        return;
      }

      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element with selector "${selector}" not found within ${timeout}ms`));
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}
