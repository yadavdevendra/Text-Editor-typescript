import React, { useRef } from 'react';

export function NewEditor () {
 const editable = useRef(null)
  function handleChange(event:any) {
    console.log("editable",editable);
    
  }

 
    return (
      <div ref={editable}onChange={handleChange}>
        Some content
      </div>
    );
}