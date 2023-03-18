import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Comments from '../Comments/Comments';
import Delete from '../Delete/Delete';
import Description from '../Description/Description';
import Flag from '../Flag/Flag';

function Error() {

  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Error component</h2>
      <Description />
      <Flag />
      <Delete />
      <Comments />
    </div>
  );
  
}

export default Error;