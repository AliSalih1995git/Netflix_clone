
import React from 'react'
import NavBar from './Componets/NavBAr/NavBar';
import {action,originals} from './Urls'
import './App.css';
import Banner from './Componets/Banner/Banner';
import RowPost from './Componets/RowPost/RowPost';
;function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Original' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
