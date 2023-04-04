import React from 'react';
import { useGetErrorsQuery } from '../../redux/apiSlice';
import { ErrorExcerpt } from './ErrorExcerpt';

export const AllErrorContent = () => {
  
  const {
    data: errors,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetErrorsQuery("1"); // TODO: How do I make this input dynamic/chosen by the user?

  let content;

  if(isLoading) {
    return content = <p>Loading...</p>
  } else if(isSuccess) {
    return content = errors.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    return content = <div>{error.toString()}</div>
  }
  
}