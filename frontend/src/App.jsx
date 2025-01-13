import React from 'react'
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

function App() {
  return (
    
    <div className='h-screen w-full'>

    {/* Header */}
      <div className='w-full h p-2 bg-zinc-900 text-white'>
        <Header />
      </div>
      
      {/* body  */}
      <div className='w-full h-max p-2 bg-zinc-800  text-white'>
        <Body />
      </div>
      
      {/* Footer  */}
      <div className='w-full h-10'>
        <Footer />
      </div>
    </div>
    
  )
}

export default App