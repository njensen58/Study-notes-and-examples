# Hooks in Depth

# Got to this code pen: 
  * https://codesandbox.io/s/github/btholt/react-hooks-examples/tree/master/


# useState - you know this one

# useEffect - 

  * You don't always need a dependency array, take for example a clock:
  
  ```javascript
    const EffectComponent = () => {
      const [time, setTime] = useState(new Date());

      useEffect(() => {
        const timer = setTimeout(setTime(new Date()), 1000);
        return () => clearTimeout(timer);
      });

      return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
    }; 
  ```
  
# useContext - you know this

# useRef 

  * You would expect this alert to show state and the ref at the same number, but instead it shows
    state behind the ref by 1:

  ```javascript
    const RefComponent = () => {
    const [stateNumber, setStateNumber] = useState(0);
    const numRef = useRef(0);
    
    function incrementAndDelayLogging() {
      setStateNumber(stateNumber + 1);
      numRef.current++;
      setTimeout(
        () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
        1000
      );
    }
  
    return (
      <div>
        <h1>useRef Example</h1>
        <button onClick={incrementAndDelayLogging}>delay logging</button>
        <h4>state: {stateNumber}</h4>
        <h4>ref: {numRef.current}</h4>
      </div>
    );
  };
  ```
 
  * The reason for this is a problem of closure.  The `stateNumber` variable inside of 
    `incrementAndDelayLogging` is scoped to the time the function is called, so stateNumber is referring to the 
    previous state when the alert is called, even after the set state is called in that function.
    * The ref however is a direct reference to that exact moment in time and shows the recently
      incremented number appropriately.
    * If you click 5 times in 1 second, you will see the ref log 5 five times in a row, where the state will
      increment in each subsequent alert.
  * useRef will always have one assessible property called `.current`.
  * `Useful for`:
    - Holding onto DOM elements
    - Holding onto timeOuts and intervals.


# useReducer - You know this one
  * Redux runs the reducer on the first time, but `useReducer` does not.
  * One of the biggest advantages with redux and useReducer is that it is really easy to test
    - All you have to do it give it a previous state value, run the case, and ensure you get the expectec
      updated state back.
  * Using context and useReducer together is basically using redux.


# useMemo
  * For expensive functions
  * You may not ever need to use this, but you might with some sort of complicated/expensive 
    custom hook.
  * For example, here is a fibonacci squenence in a component that also uses a custom hook
    to create and toggle a theme.

  ```javascript
  const fibonacci = n => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const fib = useMemo(() => fibonacci(num), [num]);

    return (
      <div>
        <h1
          onClick={() => setIsGreen(!isGreen)}
          style={{ color: isGreen ? "limegreen" : "crimson" }}
        >
          useMemo Example
        </h1>
        <h2>
          Fibonacci of {num} is {fib}
        </h2>
        <button onClick={() => setNum(num + 1)}>➕</button>
      </div>
    );
  };
  ```

  * if line `96` is replaced with 
    ```javascript
      const fib = fibonacci(num)
    ```
    Then changing the theme causes fibonacci to have to recalculate a number
    it has already found the result for.  This is expensive and shouldn't have
    to re-evaluate due to a theme change.
  
  * That is why instead we use `useMemo` to say, if you have received this number
    in a previous render, use your cached (memoized) result instead of re-calculating.


# useCallback and memo

  ``` javascript
    import React, { useState, useEffect, useCallback, memo } from "react";

    const ExpensiveComputationComponent = memo(({ compute, count }) => {
      return (
        <div>
          <h1>computed: {compute(count)}</h1>
          <h4>last re-render {new Date().toLocaleTimeString()}</h4>
        </div>
      );
    });

    const CallbackComponent = () => {
      const [time, setTime] = useState(new Date());
      const [count, setCount] = useState(1);
      useEffect(() => {
        const timer = setTimeout(setTime(new Date()), 1000);
        return () => clearTimeout(timer);
      });

      const fibonacci = n => {
        if (n <= 1) {
          return 1;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
      };

      return (
        <div>
          <h1>useCallback Example {time.toLocaleTimeString()}</h1>
          <button onClick={() => setCount(count + 1)}>
            current count: {count}
          </button>
          <ExpensiveComputationComponent
            compute={useCallback(fibonacci, [])}
            count={count}
          />
        </div>
      );
    };
  ```

  * `memo` ias used to say *only rerender this component if any of the passed in props have changed*.
  * useCallback is called on the *compute* function as it is passed as a prop to make sure the same
    location of memory for the `fibonacci` function is maintained.  This allows `memo` to work 
    appropriately due to it checking to see if either of its props change.
  * 99/100 times, you wont need any of these functions. But knowing what they are good for can
    come in handy.


# useLayoutEffect
  * Pretty much only useful if you need to measure something in the DOM.
  * Runs right before `useEffect` after the DOM is painted/rendered.
    - So useLayoutEffect can be seen as `synchronous` after the DOM is painted, while
      `useEffect` is technicall `async`.
  * Can also take a dependency array if you only want it to run on first render, or only
    if depenendencies change.

  ```javascript
      const LayoutEffectComponent = () => {
      const [width, setWidth] = useState(0);
      const [height, setHeight] = useState(0);
      const el = useRef();

      useLayoutEffect(() => {
        setWidth(el.current.clientWidth);
        setHeight(el.current.clientHeight);
      });

      return (
        <div>
          <h1>useLayoutEffect Example</h1>
          <h2>textarea width: {width}px</h2>
          <h2>textarea height: {height}px</h2>
          <textarea
            onClick={() => {
              setWidth(0);
            }}
            ref={el}
          />
        </div>
      );
    };
  ```

  * So if you needed measurements for something like jQuery or D3, this is how you would do it.
  * Passing `el` to `ref` in the textarea makes the `el.current` value equal the `textarea` DOM node.


# useImperativeHandle
  * You will probably never use this one, its mainly for library authors.
  