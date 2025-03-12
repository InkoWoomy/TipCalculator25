import React from 'react'

const MainPage = () => {
  return (
    <>
      <div className='flex justify-center '>
        <div className='py-10 text-center'>
          <img src="logo.svg" alt="logo"/>
        </div>
      </div>
      
      <div className='mx-96 bg-white rounded-2xl grid grid-cols-2'>
          <div>
            <h1 className='text-green-800'>Bill</h1>
          </div>
          <div className='bg-green-800'>

          </div>
        </div>
    </>
  )
}

export default MainPage
