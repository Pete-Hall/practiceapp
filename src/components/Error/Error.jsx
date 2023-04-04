import React from 'react';
import { SingleErrorContent } from './SingleError';
import { AllErrorContent } from './AllErrors';
import { SingleErrorMultipleParamsContent } from './SingleErrorMultipleParams';

export const ErrorList = () => {

  return (
    <section>
      <h2>Errors from RTK Query</h2>
      <AllErrorContent />
      <h2>Single Error from RTK Query</h2>
      <SingleErrorContent />
      <h2>Single Error Multiple Query Params from RTK Query</h2>
      <SingleErrorMultipleParamsContent />
    </section>
  )
}
