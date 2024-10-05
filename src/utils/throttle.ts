type ThrottledFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ThrottledFunction<T> {
  let shouldWait = false;
  let waitingArgs: Parameters<T> | null = null;

  const timeoutFunction = () => {
    if (waitingArgs) {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, limit);
    } else {
      shouldWait = false;
    }
  };

  return (...args: Parameters<T>): void => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    func(...args);
    shouldWait = true;

    setTimeout(timeoutFunction, limit);
  };
}

export { throttle };
// // Example usage:
// const expensiveOperation = () => {
//   console.log('Throttled operation executed!', Date.now());
//   // Simulate an expensive operation
//   for (let i = 0; i < 1000000; i++) { }
// };

// const throttledOperation = throttle(expensiveOperation, 1000);

// // This will execute immediately, then at most once per second
// setInterval(throttledOperation, 100);
