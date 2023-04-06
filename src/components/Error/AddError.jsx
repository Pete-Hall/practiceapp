import React, { useEffect, useState } from 'react';
import { useAddNewErrorMutation } from '../../redux/apiSlice';

export const AddError = () => {

  const [addNewError, { isLoading }] = useAddNewErrorMutation();

  const [newError, setNewError] = useState('');

  useEffect(() => {
    console.log(newError);
  }, [newError]);

  const canSave =[newError].every(Boolean) && !isLoading;

  const onSave = async() => {
    if(canSave) {
      try {
        await addNewError({newError}).unwrap();
        setNewError('');
      } catch(err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }
  
  return(
    <div>
      <input type="text" placeholder="Enter description" onChange={(e) => setNewError(e.target.value)}/>
      <button onClick={onSave}>Save</button>
    </div>
  )
  
}