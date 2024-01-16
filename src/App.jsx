import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import UrlShorter from './components/UrlShorter'
function App() {
  const [started, setStarted] = useState(false)
  return (
    <>
      <main className="bg-slate-800 sm:p-5 p-3 flex flex-col items-center sm:px-20 px-8 h-[100vh]">
        <h1 className='font-medium text-2xl text-white w-full'>NodeShorter</h1>
        {!started ? <Welcome setStarted={setStarted} /> : <UrlShorter />}
        <p className='text-sm text-slate-500 pt-20'>Joaquin Di cio - All rights reserved</p>
      </main>
    </>
  )
}

export default App
