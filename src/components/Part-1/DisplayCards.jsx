import React from 'react'

const DisplayCards = ({odds, evens,})  => {

return (
    <div>
    <div className='resultsBox'>
        Evens:[{evens.toString(", ")}]       
    </div>

    <div className='resultsBox'>
        Odds:[{odds.toString(", ")}]    
    </div>
    </div>
)
}

export default DisplayCards