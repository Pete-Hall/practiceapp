import React from 'react';
import { SingleErrorContent } from './SingleError';
import { AllErrorContent } from './AllErrors';

export const ErrorList = () => {

  return (
    <section>
      <h2>Errors from RTK Query</h2>
      <AllErrorContent />
      <h2>Single Error from RTK Query</h2>
      <SingleErrorContent />
    </section>
  )
}
