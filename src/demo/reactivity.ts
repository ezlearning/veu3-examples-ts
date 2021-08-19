let val1 = 2;
const val2 = 3;
const sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // Still 5

type CallbackFn = () => void;

// Maintain a stack of running effects
const runningEffects: CallbackFn[] = [];

const createEffect = (fn: CallbackFn) => {
  // Wrap the passed fn in an effect function
  const effect = () => {
    runningEffects.push(effect);
    fn();
    runningEffects.pop();
  };

  // Automically run the effect immediately
  fn();
};
