import React from 'react'
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

function App() {
  return (
    
    <div className='h-screen w-full flex flex-col bg-blue-900 text-white'>

    {/* Header */}
      <div className='w-full bg-blue-950 rounded-lg'>
        <Header />
      </div>
      
      {/* body  */}
      <div className='w-full h-5/6  bg-blue-900'>
        <Body />
      </div>
      
      {/* Footer  */}
      <div className='w-full bg-blue-900  '>
        <Footer />
      </div>
    </div>
    
  )
}

export default App