import React from 'react';
import { SingleErrorContent } from './SingleError';
import { AllErrorContent } from './AllErrors';
import { SingleErrorMultipleParamsContent } from './SingleErrorMultipleParams';
import { AddError } from './AddError';

export const ErrorList = () => {

  return (
    <section>
      <h2>Errors from RTK Query</h2>
      <AllErrorContent />
      <h2>Single Error from RTK Query</h2>
      <SingleErrorContent />
      <h2>Single Error Multiple Query Params from RTK Query</h2>
      <SingleErrorMultipleParamsContent />
      <h2>Add an error (not realistic but curious how to do this)</h2>
      <AddError />
    </section>
  )
}
