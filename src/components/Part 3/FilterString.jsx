import React, {useState} from 'react'


function FilterString() {
    

    const [input, setInput] = useState()
    const namesArr = ['"Stark"', ' "Satoru"', ' "Terry"', ' "Valgo"', ' "Aulora"', ' "Taliara"', ' "Fenrir"', ' "Meliodas"']
    const [result, setResult] = useState([])

   const filterHandler = (event) => {
      event.preventDefault()
      console.log(input, result)
        setResult(namesArr.filter((e) => e.toLowerCase().includes(input.toLowerCase())))
    }

  return (
    <div>
         <p className='puzzleText'>
            Names: [{namesArr.toString('')}]
         </p>


        <form className='puzzleFeed' onSubmit={filterHandler}>
            <input className='inputLine' onChange={(e) => setInput(e.target.value)}/>
      
            <button className='confirmationButton'>Filter</button>

        </form>

            <div className='resultsBox filterStringRB '>

                Filtered Names: [{result}]
            </div>
    </div>
  )
}

export default FilterString