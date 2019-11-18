import React from 'react';

import PokeLogo from './PokeLogo';
import PokeButton from './PokeButton';

const selectStyle = {
  margin: '0 8px',
  minWidth: '80px',
};

function PokeSelector({ handleChange, items }) {
  return (
    <select
      onChange={e => handleChange(e.target.value)}
      style={selectStyle}
      disabled={!items.length}
    >
      {items.map(item => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

const flexCenter = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const styles = {
  backgroundColor: '#EF5350',
  padding: '8px',
  ...flexCenter,
};

const label = {
  color: 'white',
}

function PokeHeader({
  loading,
  regions = [],
  locations = [],
  changeRegion,
  changeLocation,
  changeArea,
  areas = [],
  handleExplore,
}) {
  return (
    <header style={styles}>
      <PokeLogo />
      <div style={flexCenter}>
        {loading ? (
          'Loading...'
        ) : (
          <React.Fragment>
            <label style={label}>Regions :<PokeSelector handleChange={changeRegion} items={regions} /></label>
            <label style={label}>Locations :<PokeSelector handleChange={changeLocation} items={locations} /></label>
            <label style={label}>Areas :<PokeSelector handleChange={changeArea} items={areas} /></label>
          </React.Fragment>
        )}
      </div>
      <PokeButton handleExplore={handleExplore}>Explore</PokeButton>
    </header>
  );
}

export default PokeHeader;
