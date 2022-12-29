import React from 'react'
import OddsEvens from './components/Part-1/OddsEvens';
import FilterObj from './components/Part 2/FilterObj';

function App() {
  return (
    <section>
    <div className='puzzleBox evenAndOddPB'>
      <h4>Evens and Odds</h4>
      <OddsEvens />
    </div>

    <div className='puzzleBox filterObjectPB'>
    <h4>Filtered Object</h4>
      <FilterObj />
    </div>

    <div>Coming Soon!!!!</div>
    </section>
  );
}

export default App;
