import React from 'react'

export default function ({details}) {
  return (
    <div className='details'>
        <h4 >Color:</h4>
        <h4 className='mb-5'>{details.color}</h4>
        <div className='price row col-5 align-items-center mb-4'>
        <h4 className='col m-0 p-0 '>{details.name}</h4>
        <p className='col m-0  myPrice'> ${details.price}</p>
        </div>
        <div className='row col-5'>
            <div className='row styleButton m-0 col align-items-center justify-content-center'>
                <p style={{height:"auto"}}className='m-0 p-0 text-center'> Style</p>
                </div>
            <div className='bidButton row col m-0 col align-items-center justify-content-center'> 
            <p className='m-0 p-0 text-center'> Place Bid</p>
                </div>
        </div>
    </div>
  )
}
