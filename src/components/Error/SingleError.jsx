import React from 'react';
import { useGetSingleErrorQuery } from '../../redux/apiSlice';
import { ErrorExcerpt } from './ErrorExcerpt';

export const SingleErrorContent = () => {
  
  const {
    data: singleError,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetSingleErrorQuery("1");

  let content;

  if(isLoading) {
    return content = <p>Loading...</p>
  } else if(isSuccess) {
    return content = singleError.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    return content = <div>{error.toString()}</div>
  }
  
}