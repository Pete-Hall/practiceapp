import React from 'react';
import { useGetErrorsQuery } from '../../redux/apiSlice';
import { ErrorExcerpt } from './ErrorExcerpt';

export const AllErrorContent = () => {
  
  const {
    data: singleError,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetErrorsQuery("1");

  let content;

  if(isLoading) {
    return content = <p>Loading...</p>
  } else if(isSuccess) {
    return content = singleError.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    return content = <div>{error.toString()}</div>
  }
  
}