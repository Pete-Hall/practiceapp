import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getErrorDescription } from '../../redux/descriptionSlice';

function Description() {

  const dispatch = useDispatch();

  const description = useSelector((state) => state.description.value);

  useEffect(() => {
    dispatch(getErrorDescription());
  }, [])

  return (
    <div>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
  
}

export default Description;