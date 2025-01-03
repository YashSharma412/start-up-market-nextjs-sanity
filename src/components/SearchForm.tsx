import React from 'react'
import Form from 'next/form'
import SearchFormReset from './utils/SearchFormReset';
import { Search } from 'lucide-react';
const SearchForm = ({querry}: {querry?:string}) => {
  // const querry = "test";

  
  return (
    <Form action={"/"} scroll={false} className='search-form'>
      <input 
        type="text"
        name="querry"
        placeholder="Search for startups..."
        defaultValue={querry}
        className='search-input'
      />
      <div className="flex gap-2">
        {
          querry && (
            <SearchFormReset />
          )
        }
        <button type='submit' className='search-btn text-white'>
          <Search className=' size-5'/>
        </button>
      </div>
    </Form>
  )
}

export default SearchForm