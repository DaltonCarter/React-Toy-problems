import React, {useState} from 'react'
import DisplayCard from './DisplayCard'

function FilterObj() {
const [input, setInput] = useState('')
const [result, setResult] = useState()

const obArr = [{"name": "Stark", "age": "30", "title": "Wolf-Lord"},
{"name": "Satoru", "age": "29", "hairColor": "red"},
{"name": "Aulora", "age": "31", "species": "Yokaran"}]

const filterHandler = (event) => {
    event.preventDefault()
let userInput = input

    if(userInput === 'name'){
        let retrn = obArr.filter((e) => e.name)
        console.log(retrn)
         setResult(retrn.map((rtn, index) => {
            return <DisplayCard results={rtn}/>
        }))
    }else if (userInput === 'age') {
        let retrn = obArr.filter((e) => e.age)
        console.log(retrn)
        setResult(retrn.map((rtn, index) => {
            return <DisplayCard results={rtn}/>
        }))
    }else if(userInput === 'hairColor') {
        let retrn = obArr.filter((e) => e.hairColor)
        console.log(retrn)
        setResult(retrn.map((rtn, index) => {
            return <DisplayCard results={rtn}/>
        }))
    }else if(userInput === 'title') {
        let retrn = obArr.filter((e) => e.title)
        console.log(retrn)
        setResult(retrn.map((rtn, index) => {
            return <DisplayCard results={rtn}/>
        }))
    }else if(userInput === 'species') {
        let retrn = obArr.filter((e) => e.species)
        console.log(retrn)
        setResult(retrn.map((rtn, index) => {
            return <DisplayCard results={rtn}/>
        }))
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

    <div className='resultsBox filterObjectRB '>

       Filtered: [ {result} ]
    </div>
    

    </div>
  )
}

export default FilterObj