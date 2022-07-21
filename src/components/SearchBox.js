import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../searchSlice';


export const SearchBox = () => {
  const dispatch = useDispatch();

  return (

    
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={event => dispatch(setSearchField(event.target.value))}
      />
    </div>
  );
}

export default SearchBox;

