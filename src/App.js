import logo from './logo.svg';
import './App.css';
import Details from './Components/Details'
import Header from './Components/Header'
import Options from './Components/Options'
import { Container } from '@material-ui/core'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header title="shift"/>
      <Container>
        <Details/>
        <Options/>
      </Container>
    </div>
  );
}

export default App;