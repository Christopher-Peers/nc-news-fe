import React from 'react';

const NoMatch = (props) => {
  
  return (
    <div className="mt-3">
      <h1>404 Not Found</h1>
      <p>The path "{props.location.pathname}" you have requested does not exist.</p>
    </div>
  )
}

export default NoMatch;