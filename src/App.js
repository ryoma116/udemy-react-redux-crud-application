import React from 'react';

// function App() {

//   const GREETING = "Hi, Tom!"
//   const DOM = <input type="text" onChange={() => {console.log("I am clecked.")}} />

//   return (
//     <header>
//       <label htmlFrom="bar">bar</label>
//       {DOM}
//     </header>
//   );
// }

const App = () => {
  return <div>
      Hi!
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
}

const Cat = () => {
  return <div>Meaw!</div>
}


export default App;
