import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import Delete from '../Delete/Delete';
import Description from '../Description/Description';
import Flag from '../Flag/Flag';
import {useDispatch, useSelector} from 'react-redux';
import { getErrors } from '../../redux/errorSlice';
import { useGetErrorsQuery, useGetSingleErrorQuery } from '../../redux/apiSlice';

// this could be deleted and Description, Delete, Flag, Comments could be adjusted (I think) - maybe along with how we handle content and what we return
let ErrorExcerpt = ({ errorToShow }) => {
  return (
    <p>{JSON.stringify(errorToShow)}</p>
  )
}

export const ErrorList = () => {

  const {
    data: errors,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetErrorsQuery();

  const {
    data: singleError,
    isLoading: singleIsLoading,
    isSuccess: singleIsSuccess,
    isError: singleIsError,
    error: singleErrorError
  } = useGetSingleErrorQuery("1");

  let content;
  let singleContent;

  if(isLoading) {
    content = <p>Loading...</p>
  } else if(isSuccess) {
    content = errors.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    content = <div>{error.toString()}</div>
  }

  if(singleIsLoading) {
    singleContent = <p>Loading...</p>
  } else if(singleIsSuccess) {
    console.log(singleError);
    singleContent = singleError.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(singleIsError) {
    singleContent = <div>{singleErrorError.toString()}</div>
  }

  return (
    <section>
      <h2>Errors from RTK Query</h2>
      {content}
      <h2>Single Error from RTK Query</h2>
      {singleContent}
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