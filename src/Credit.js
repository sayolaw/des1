import React from 'react'

export default function Credit({words}) {
   
  return (
    <div className='credits'>
        <h4>CREDITS</h4>
        <div className="mb-5" >
        <pre style={{color:"white"}}> {words.credits}</pre>
        </div>
        <div className="mt-5"> 
        <pre style={{color:"white"}}> {words.credit2}</pre>
        </div>
    </div>
  )
}
