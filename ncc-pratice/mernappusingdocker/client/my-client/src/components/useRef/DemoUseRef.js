// import React, { useRef } from "react";

// const DemoUseRef = () => {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// };

// export default DemoUseRef;

// import React, { useState } from "react";
// const child = {
//   padding: "25px",
//   margin: "25px",
//   border: "2px solid blue",
// };

// const Child = (prop) => {
//   console.log("fuction called....");
//   let counter = 0;
//   let [myState, setMyState] = useState("A");

//   let updateState = () => {
//     counter++;
//     setMyState(myState + "-u-");
//     console.log("counter: " + counter);
//   };

//   return (
//     <div style={child}>
//       <div>
//         <div>MyState : {myState}</div>
//         <input
//           type="button"
//           onClick={() => updateState()}
//           value="Update State"
//         ></input>
//       </div>
//     </div>
//   );
// };

// export default Child;

// useRef

import React, { useState, useRef } from "react";
const child = {
  padding: "25px",
  margin: "25px",
  border: "2px solid blue",
};

const Child = (prop) => {
  console.log("fuction called....");
  let counter = useRef(0);
  let [myState, setMyState] = useState("A");

  let updateState = () => {
    // Now we can update the current property of Referenced object as below.
    counter.current++;
    setMyState(myState + "-u-");
    console.log("counter: " + counter.current);
  };

  return (
    <div style={child}>
      <div>
        <div>MyState : {myState}</div>
        <input
          type="button"
          onClick={() => updateState()}
          value="Update State"
        ></input>
      </div>
    </div>
  );
};

export default Child;
