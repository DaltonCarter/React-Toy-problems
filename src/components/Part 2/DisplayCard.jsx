import React from 'react'

function DisplayCard({results}) {

    
  return (
    <div>
      {results.title && <p>&#123; "name": "{results.name}", "age": "{results.age}", "title": "{results.title}" &#125;</p>}
      {results.hairColor && <p>&#123; "name": "{results.name}", "age": "{results.age}", "hairColor": "{results.hairColor}" &#125;</p>}
      {results.species &&  <p>&#123; "name": "{results.name}", "age": "{results.age}", "species": "{results.species}" &#125;</p>}
      </div>
  )
}

export default DisplayCard