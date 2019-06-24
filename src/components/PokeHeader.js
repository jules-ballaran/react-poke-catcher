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

function PokeHeader({
  loading,
  regions = [],
  locations = [],
  changeLocation,
  areas = [],
}) {
  return (
    <header style={styles}>
      <PokeLogo />
      <div style={flexCenter}>
        {loading ? (
          'Loading...'
        ) : (
          <React.Fragment>
            <PokeSelector items={regions} />
            <PokeSelector handleChange={changeLocation} items={locations} />
            <PokeSelector items={areas} />
          </React.Fragment>
        )}
      </div>
      <PokeButton>Explore</PokeButton>
    </header>
  );
}

export default PokeHeader;
