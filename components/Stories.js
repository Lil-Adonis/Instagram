import React from 'react'
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';



const Stories = () => {
    const [suggestions, setSuggestions] = useState([]);

   useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
    }));
    setSuggestions(suggestions);
   }, []);



  return (
    <div>
        {suggestions.map(profile => (
            
        ))}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
        {/* Stories */}
    </div>
  )
}

export default Stories