import React from 'react'

export default function Pictures({details,track,handleClick}) {
 var picOne = track + 1;
 var picTwo = track + 2;
 if(picOne>=details.length){
  picOne = 0;
  picTwo = 1;
 }
 if(picTwo>=details.length){
  
  picTwo = 0;
 }

    function handleNext(){
        handleClick();
    }
  return (
    <div className='row pictureSlide'>
        <div className="pictures p-0" style={{backgroundImage:`url(${details[picOne].image})`}}>
            <div className='block'></div>
        </div>
        <div className="pictures mb-3 p-0" style={{backgroundImage:`url(${details[picTwo].image})`}}>
        <div className='block'></div>
        </div>
        <h4 style={{textAlign:'right',cursor:"pointer"}} onClick={handleNext}>Next</h4>
    </div>
  )
}
