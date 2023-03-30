import React from 'react';
import { useGetSingleErrorMultipleParamsQuery } from '../../redux/apiSlice';
import { ErrorExcerpt } from './ErrorExcerpt';

export const SingleErrorMultipleParamsContent = () => {
  
  const {
    data: singleError,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetSingleErrorMultipleParamsQuery({errorID: "1", errorFlag: "True"});

  let content;

  if(isLoading) {
    return content = <p>Loading...</p>
  } else if(isSuccess) {
    return content = singleError.map(errorToShow => <ErrorExcerpt key={errorToShow.id} errorToShow={errorToShow} />)
  } else if(isError) {
    return content = <div>{error.toString()}</div>
  }
  
}