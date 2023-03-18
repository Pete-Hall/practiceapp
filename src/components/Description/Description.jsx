import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Description() {

  const description = useSelector((state) => state.description.value);

  return (
    <div>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
  
}

export default Description;