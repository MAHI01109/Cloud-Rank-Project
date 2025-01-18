// import { useState } from 'react'

import { useState } from 'react';
import './App.css'
import SlectUser from './Components/SelectUser'
function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className='h-screen'>
      <header className='flex  justify-center items-center bg-blue-500 h-24'>
        <div className='w-72'>
          <SlectUser selected={selected} setSelected={setSelected} />
        </div>

      </header>
    </div>
  )
}

export default App
