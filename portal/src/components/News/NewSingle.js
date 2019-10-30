import React from 'react';

// create a stateless functional component
const NewSingle = ({item}) => {
  return (
    <li>
      <p>{item.title}</p>
    </li>
  );
};

export default NewSingle;
