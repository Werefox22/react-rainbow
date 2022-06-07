import React, { useState } from 'react'
import ColorBlock from './ColorBlock';

function App(){
    let [ colors, setColors ] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

    let colorMap = colors.map((color, i) => {
      return <ColorBlock color={color} key={i}/>
    })

    return (
        <div className="App">
          {colorMap}
        </div>
    )
}

export default App;
