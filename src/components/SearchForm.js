import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText
} from 'reactstrap';

import {NewTitle, NewCard} from './CharacterList';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const result = props.character.filter(char => {
      return char.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(result);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(event.target.value)
  }

  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>
          Search:
          <input
            id='search'
            type='text'
            name='search'
            placeholder='Search for a character!'
            onChange={handleChange}
            value={searchTerm}
          />
          <div>
              {searchResults.map(c => (
              <Card key={c.id}>
                <NewTitle>{c.name}</NewTitle>
                <CardImg src={c.image}/>
                <CardText>Gender: {c.gender}</CardText>
                <CardText>Species: {c.species}</CardText>
              </Card>
              ))}
          </div>
        </label>
      </form>
    </section>
  );
}
