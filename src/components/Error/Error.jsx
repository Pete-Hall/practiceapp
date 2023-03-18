import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import Delete from '../Delete/Delete';
import Description from '../Description/Description';
import Flag from '../Flag/Flag';
import {useDispatch, useSelector} from 'react-redux';
import { getErrors } from '../../redux/errorSlice';

function Error() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getErrors());
  }, [])

  const errors = useSelector((state) => state.errors.value);

  return (
    <div>
      <h2>Error component</h2>
      <Description errors = {errors}/>
      <Flag />
      <Delete />
      <Comments />
    </div>
  );
  
}

export default Error;