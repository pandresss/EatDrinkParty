import React from 'react';

const Barlist = (props)=> {
  console.log("barlist on line 4 barlist.js", props);
  return(
    <div className="bar">
      <p>{props.name}</p>
      <button onClick={(e)=> props.delete(props)}>Delete</button>
      </div>
  );
}
export default Barlist;
