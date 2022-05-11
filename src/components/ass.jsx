import React, {  useState } from 'react'
import Component1 from './functional'
import Component2 from './class'
import './a.css'
const Preview = () => {
    const[box1,func]=useState(false)
    const[box2,clas]=useState(false)
  return (<>
          <h1>Styling Using Functional and Classcomponent</h1>
          <button className='btn1' onClick={()=>box1?func(false):func(true)}>To Style Using Functional Component</button>
          <button className='btn2' onClick={()=>box2?clas(false):clas(true)}>To Style Using Class Component</button>
           
           {
               box1 && <Component1/>
           }
           {
               box2 && <Component2/>
           }
  </>
    
  )
}

export default Preview