
import './App.css'
import './index.js'

function App() {
return(
  <div>
    <h1>
        <input type="text" id="pokemonName" placeholder="Enter the name of the Pokemon" />
        <button onclick="fetchData()">Fetch PokeMon</button>

        <img src="" alt="Pokemon Sprite" id="pokemonSprite"/>
      
      </h1>

  </div>
)    
  
     
   
  
}

export default App
