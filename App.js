import React from 'react';
import { Container } from 'native-base';
import SpotLocator from './App/Components/SpotLocator';

export default class App extends React.Component {

  render() {
    return (
      <Container>
        <SpotLocator />
      </Container>
    );
  }
}
