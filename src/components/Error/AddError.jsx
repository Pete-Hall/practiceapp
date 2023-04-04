import React, { useEffect, useState } from 'react';

export const AddError = () => {

  const [newError, setNewError] = useState('');

  useEffect(() => {
    console.log(newError);
  }, [newError]);
  
  return(
    <div>
      <input type="text" onChange={(e) => setNewError(e.target.value)}/>
    </div>
  )
  
}