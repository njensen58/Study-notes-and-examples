# Hooks in Depth

# Got to this code pen: 
  * https://codesandbox.io/s/github/btholt/react-hooks-examples/tree/master/


# useState - you know this one

# useEffect - 

  * You don't always need a dependency array, take for example a clock:
  
    const EffectComponent = () => {
      const [time, setTime] = useState(new Date());

      useEffect(() => {
        const timer = setTimeout(setTime(new Date()), 1000);
        return () => clearTimeout(timer);
      });

      return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
    }; 

  
# useContext - you know this

# useRef 
 

