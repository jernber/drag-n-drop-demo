import './App.css';

const dotaCharacters = [
  {
    id: 'drow',
    name: 'Drow',
    thumb: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/63/Drow_Ranger_minimap_icon.png'
  },
  {
    id: 'visage',
    name: 'Visage',
    thumb: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Visage_minimap_icon.png'
  },
  {
    id: 'meepo',
    name: 'Meepo',
    thumb: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/17/Meepo_minimap_icon.png'
  },
  {
    id: 'ES',
    name: 'Ember Spirit',
    thumb: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fc/Ember_Spirit_minimap_icon.png'
  },
  {
    id: 'VS',
    name: 'Void Spirit',
    thumb: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/02/Void_Spirit_minimap_icon.png'
  }

]
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Dota Dota Dota</h1>
      <ul className="characters">
        {dotaCharacters.map(({id, name, thumb}) => {
          return (
            <li key={id}>
              <div className="characters-thumb">
                <img src={thumb} alt={`${name} Thumbnail`}/>
              </div>
              <p>{name}</p>
            </li>

          )
        })}
      </ul>
      </header>
    </div>
  );
}

export default App;
