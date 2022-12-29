import React, {useState} from 'react'
import DisplayCards from './DisplayCards'

const OddsEvens = (props) => {

    const [test, setTest] = useState()
    const [evens, setEvens] = useState([])
    const [odds, setOdds] = useState([])



    const submitHandler = event => {
        event.preventDefault()
        
        let input = test
         input = input.split(",").map((x) => parseInt(x, 10))

         setEvens(() => input.filter((x) => {x % 2 === 0}))
        
         setOdds(() => input.filter((x) => x % 2 !== 0))

        
    }

    

    return (
        <div className='puzzleFeed'>
        <form className='puzzleFeed' onSubmit={submitHandler}>
            <input className='inputLine' onChange={(e) => setTest(e.target.value)}></input>

            <button className='confirmationButton'>Split</button>


        </form>

    
            <DisplayCards  odds={odds} evens={evens}/>
        
        
        </div>
    )
}

export default OddsEvens