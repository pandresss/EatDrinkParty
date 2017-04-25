import React, {Component} from 'react';
import marker from '../marker.png';

const Places =()=>{
  // // 
  // infoMarker(pinDrops,eName) {
  //     const namer=document.getElementByClass(pinDrops);
  //     if(namer.style.display === "none"){
  //       namer.style.display="block";
  //       namer.classList.add("info");
  //     }
  //   }


  return (


    <div className="mark">

        <img className="pinDrops" src={marker} alt=""></img>


    </div>
  );

}

export default Places;
