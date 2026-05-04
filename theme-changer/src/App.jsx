import { useState } from 'react'
import './index.css'
import Button from './Components/buttons'

function App() {
  
  return (
    <div className='main'>  
      <h1>Theme Changer</h1>
      <div className='buttons'>
        <Button color='red' />
        <Button color='blue' />
        <Button color='green' />
        <Button color='yellow' />
        <Button color='white' />
        <Button color='black' />
        <Button color='purple' />
        <Button color='orange' />
        <Button color='pink' />
        <Button color='gray' />
        <Button color='brown' />
      </div>
    </div>
  )
}

export default App
