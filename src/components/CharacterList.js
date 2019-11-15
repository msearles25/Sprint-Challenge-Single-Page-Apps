import React, { useEffect, useState } from "react";
import axios from 'axios';

import {
  Row,
  Card,
  CardBody,
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
export const NewCard = styled(CardTitle)`
  margin: 25px auto;
`;
export const NewBody = styled(CardBody)`
    background: #d4ebf2;
    margin: 0
  `;
export const NewText = styled(CardText)`
  font-size: 20px;
  text-align: center;
  margin: 0;
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
      <SearchForm character={characters} />
      <Row>
        {characters.map(character => (
          <NewCard key={character.id}>
            <NewBody>
              <NewTitle>{character.name}</NewTitle>
              <CardImg src={character.image} />
              <NewText>Gender: {character.gender}</NewText>
              <NewText>Species: {character.species}</NewText>
            </NewBody>
          </NewCard>
        ))}
      </Row>
    </section>
  );
}
