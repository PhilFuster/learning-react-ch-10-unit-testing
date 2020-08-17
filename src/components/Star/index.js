import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar color={selected ? 'red' : 'grey'} id='star' className='help' />
    </>
  );
};

export default Star;
