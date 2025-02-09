import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";

import {Col} from 'reactstrap';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Col xs="12" s="12" md="12" >
        <Route exact path='/character-list' component={CharacterList}/>
      </Col>
    </main>
  );
}
