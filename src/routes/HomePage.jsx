import React, {useState} from 'react';
import Header from '../Header'
import FeaturedArticles from '../FeaturedArticles';

function  HomePage() {
    const [searchTerm , setsearchTerm] = useState('')
  
    function onSearchChange(e)
    {
      setsearchTerm(e.target.value)
    }
    return (
      
      <div>
      <div className='header-div'>
        <Header 
          text = "Staff List"
        />
        
        <input 
        onChange = {onSearchChange}
        type="text"
        placeholder = "search staff"
        value = {searchTerm}
        />
     </div>
        <FeaturedArticles
          
        />
        
      </div>
      
    );
}
export default HomePage;