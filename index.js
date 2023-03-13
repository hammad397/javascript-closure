const closure = () => {
  let counter = 0;
  return () => {
    if (counter < 1) {
      console.log("Hi, you called me!");
      counter++;
    } else {
      console.log("You, already called me!");
    }
  };
};

const counterClosure = closure();
counterClosure();
counterClosure();
counterClosure();
