import React from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
      </header>
    </div>
  );
}

export default App;

// WHAT !!!

// useCallback is a hook that will return a memoized version of the callback function
// that only changes if one of the dependences has changed.

//WHY ?

//it is useful when passing callbacks to optimized child components that rely on reference
// equality to prevent unnecessary renders.

//HOW ???