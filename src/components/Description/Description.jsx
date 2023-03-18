import React, { useEffect, useState } from 'react';

function Description( { errors } ) {

  return (
    <div>
      <h3>Description</h3>
      <p>{errors}</p>
    </div>
  );
  
}

export default Description;