import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import Delete from '../Delete/Delete';
import Description from '../Description/Description';
import Flag from '../Flag/Flag';
import {useDispatch, useSelector} from 'react-redux';
import { getErrors } from '../../redux/errorSlice';
import { useGetErrorsQuery, useGetSingleErrorQuery } from '../../redux/apiSlice';
import { ErrorExcerpt } from './ErrorExcerpt';
import { SingleErrorContent } from './SingleError';

export const ErrorList = () => {

  const {
    data: errors,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetErrorsQuery();

  let content;

  if(isLoading) {
    content = <p>Loading...</p>
  } else if(isSuccess) {
    content = errors.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section>
      <h2>Errors from RTK Query</h2>
      {content}
      <h2>Single Error from RTK Query</h2>
      <SingleErrorContent />
    </section>
  )
}


// function Error() {

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getErrors());
//   // }, [])

//   // const errors = useSelector((state) => state.errors.value);

//   return (
//     <div>
//       <h2>Error component</h2>
//       <Description/>
//       <Flag />
//       <Delete />
//       <Comments />
//     </div>
//   );
  
// }

// export default Error;