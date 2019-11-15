import React, { useEffect, useState } from "react";
import axios from 'axios';

import {
  Row,
  Card,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap';
import styled from 'styled-components';
import SearchForm from "./SearchForm";

export const NewTitle = styled(CardTitle)`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  `;

export const NewCard = styled(Card)`
    margin: 8px;
  `;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(resp => {
        setCharacters(resp.data.results);
        // console.log(resp.data.results);
      })
      .catch(err => {
        console.log('No data recieved', err);
      })
  }, []);

  return (    
      <section className="character-list">
          <SearchForm character={characters}/>
        <Row>
            {characters.map(character => (
              <NewCard key={character.id}>
                <NewTitle>{character.name}</NewTitle>
                <CardImg src={character.image}/>
                <CardText>Gender: {character.gender}</CardText>
                <CardText>Species: {character.species}</CardText>
              </NewCard>
          ))}
        </Row>
      </section>
  );
}
