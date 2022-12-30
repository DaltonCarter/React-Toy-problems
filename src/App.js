import React from 'react'
import OddsEvens from './components/Part-1/OddsEvens';
import FilterObj from './components/Part 2/FilterObj';
import FilterString from './components/Part 3/FilterString';

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

    <div className='puzzleBox filterStringPB'>
      <h4>Filter String</h4>
      <FilterString />
    </div>

    <div>Coming Soon!!!!</div>
    </section>
  );
}

export default App;
