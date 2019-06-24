import React from 'react';
import './App.css';

import { pokeApi } from './config/axiosConfig';
import PokeHeader from './components/PokeHeader';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      regions: [],
      locations: [],
      areas: [],
      possibleEncounters: [],
    };
  }

  componentDidMount() {
    pokeApi
      .get('region')
      .then(res => {
        return {
          regions: res.data.results,
        };
      })
      .then(customRes => {
        return pokeApi.get(`region/${customRes.regions[0].name}`).then(res => {
          customRes.locations = res.data.locations;
          return customRes;
        });
      })
      .then(customRes => {
        return pokeApi
          .get(`location/${customRes.locations[0].name}`)
          .then(res => {
            customRes.areas = res.data.areas;
            return customRes;
          });
      })
      .then(customRes => {
        return pokeApi
          .get(`location-area/${customRes.areas[0].name}`)
          .then(res => {
            customRes.possibleEncounters = res.data.pokemon_encounters;
            return customRes;
          });
      })
      .then(customRes => {
        this.setState({
          loading: false,
          regions: customRes.regions,
          locations: customRes.locations,
          areas: customRes.areas,
          possibleEncounters: customRes.possibleEncounters,
        });
      });
  }

  handleLocationChange = (name) => {
    console.log('Location: ', name);
  }

  render() {
    return (
      <PokeHeader
        loading={this.state.loading}
        regions={this.state.regions}
        locations={this.state.locations}
        changeLocation={this.handleLocationChange}
        areas={this.state.areas}
      />
    );
  }
}

export default App;
