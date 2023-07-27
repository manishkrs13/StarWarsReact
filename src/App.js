import './App.css';

import React from 'react';



class Starwars extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      species: null,
      image: null

    }
  }

  GetNewCharacter() {
    const randomNumber= Math.round(Math.random()*82)
    const url= `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          species: data.species,
          image: data.image,
          loadedCharacter:true
        })
      })
    
   
  }

  render() {
   
    return (
      <div>
      {
        this.state.loadedCharacter &&
          <div>
            <h1>{this.state.name}</h1>
            <img src={this.state.image} alt="" />
            <p>{this.state.height}</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <p>Species: {this.state.species}</p>
            
            
          </div>

      }
      <button type = "button" onClick = {()=> this.GetNewCharacter()} className = "btn" > Get Character</button>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
      </header>
    </div>
  );
}

export default App;
