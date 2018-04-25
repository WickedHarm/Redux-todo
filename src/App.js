import React from 'react';

import './App.css';


import ListContainer from "./containers/ListContainer";
import HeaderContainer from "./containers/HeaderContainer";
import FormContainer from "./containers/FormContainer";

function App(props) {
  return (
    <div className="App">
        <HeaderContainer />
        <ListContainer />
        <FormContainer />
      </div>
  )
}


export default App;
