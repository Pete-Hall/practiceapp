import React from 'react';

export const ErrorExcerpt = ({ errorToShow }) => {
  return (
    <p>{JSON.stringify(errorToShow)}</p>
  )
}