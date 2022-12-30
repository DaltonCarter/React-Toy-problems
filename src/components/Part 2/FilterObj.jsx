import React, {useState} from 'react'

function FilterObj() {
const [input, setInput] = useState('')
const [result, setResult] = useState()

const obArr = [{"name": "Stark", "age": "30", "title": "Wolf-Lord"},
{"name": "Satoru", "age": "29", "hairColor": "red"},
{"name": "Aulora", "age": "31", "species": "Yokaran"}]

const filterHandler = (event) => {
    event.preventDefault()
let userInput = input

    if(userInput === 'name' || userInput === 'age'){
        let retrn = obArr.filter((e) => e.name)
        
            return setResult(
                <p className='puzzleText' >Filtered: [&#123; "name": "Stark", "age": "30", "title": "Wolf-Lord" &#125;,
        &#123; "name": "Satoru", "age": "29", "hairColor": "red" &#125;,
        &#123; "name": "Aulora", "age": "31", "species": "Yokaran" &#125;] </p>
            )
        
    }else if(userInput === 'hairColor') {
        let retrn = obArr.filter((e) => e.hairColor)
        console.log(retrn)
        setResult(<p className='puzzleText'>Filtered:[&#123; "name": "Satoru", "age": "29", "hairColor": "red" &#125;]</p>)
    }else if(userInput === 'title') {
        let retrn = obArr.filter((e) => e.title)
        console.log(retrn)
        setResult(<p className='puzzleText'>Filtered:[&#123; "name": "Stark", "age": "30", "title": "Wolf-Lord" &#125;]</p>)
    }else if(userInput === 'species') {
        let retrn = obArr.filter((e) => e.species)
        console.log(retrn)
        setResult(<p className='puzzleText'>Filtered:[&#123; "name": "Aulora", "age": "31", "species": "Yokaran" &#125;]</p>)
    }else {
        alert('Submit a valid selection!')
    }
}


  return (
    <div className='puzzleFeed'>
        <p className='puzzleText' >Original: [ &#123; "name": "Stark", "age": "30", "title": "Wolf-Lord" &#125;,
        &#123; "name": "Satoru", "age": "29", "hairColor": "red" &#125;,
        &#123; "name": "Aulora", "age": "31", "species": "Yokaran" &#125;] </p>
      
        <form className='puzzleFeed' onSubmit={filterHandler}>
            <input className='inputLine' onChange={(e) => setInput(e.target.value)}/>
      
            <button className='confirmationButton'>Filter</button>

        </form>

    <div className='resultsBox filterObjectRB  puzzleText'>

       {result} 
    </div>
    

    </div>
  )
}

export default FilterObj