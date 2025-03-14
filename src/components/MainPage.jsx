

import React, { useEffect, useState } from 'react'

const MainPage = () => {

  // Bill + Tip % / people = Tip Amount per Person

  // (Bill + Tip %) + Bill / people = Total per Person

  const [outputTipAmt, setOutputTipAmt] = useState(0);
  const [outputTotal, setOutputTotal] = useState(0);
  const [inputBill, setInputBill] = useState('');
  const [inputTip, setInputTip] = useState('');
  const [inputPeople, setInputPeople] = useState('');

  const inputClear = () => {
    setInputBill('');
    setInputTip('');
    setInputPeople('');
  }


  useEffect(() => {
    if (inputBill && inputTip && inputPeople > 0)
    {
      const totalBill = inputBill * inputTip;
      const tipAmount = (totalBill - inputBill) / inputPeople;
      const totalPerPerson = totalBill / inputPeople;

      setOutputTipAmt(tipAmount);
      setOutputTotal(totalPerPerson);
    }
  }, [inputBill, inputTip, inputPeople])


  return (
    <>
      <div className='flex justify-center '>
        <div className='py-10 text-center'>
          <img src="images/logo.svg" alt="logo"/>
        </div>
      </div>
      
      <div className='flex justify-center'>

        <div className='lg:size-1/2 gap-10 bg-white drop-shadow-2xl rounded-3xl grid lg:grid-cols-2 p-10'>
          {/* column 1 */}
          <div>
            <div className="mb-6">
              <label htmlFor="billInput" className="block mb-2 text-lg text-[#064347] font-bold tracking-widest">Bill</label>
              <input type="text" id="billInput" className="block w-full p-4 text-gray-900 border-white rounded-lg text-end placeholder:text-start bg-[#EFF6F8] text-xl" placeholder='$' value={inputBill} onChange={(event) => setInputBill(event.target.value)}/>
            </div>

            <div className='mb-6'>
              <label htmlFor="tip-buttons" className="block text-lg text-[#064347] font-semibold tracking-widest">Select Tip %</label>
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                <button type="button" className="py-2 rounded-lg text-white bg-[#064347] hover:bg-[#A4E4DF] text-2xl" onClick={() => setInputTip(1.05)}>5%</button>
                <button type="button" className="py-2 rounded-lg text-white bg-[#064347] hover:bg-[#A4E4DF] text-2xl" onClick={() => setInputTip(1.1)}>10%</button>
                <button type="button" className="py-2 rounded-lg text-white bg-[#064347] hover:bg-[#A4E4DF] text-2xl" onClick={() => setInputTip(1.15)}>15%</button>
                <button type="button" className="py-2 rounded-lg text-white bg-[#064347] hover:bg-[#A4E4DF] text-2xl" onClick={() => setInputTip(1.25)}>25%</button>
                <button type="button" className="py-2 rounded-lg text-white bg-[#064347] hover:bg-[#A4E4DF] text-2xl" onClick={() => setInputTip(1.5)}>50%</button>
                <input type="number" className="block w-full py-2 text-gray-900 border-white rounded-lg text-end placeholder:text-center bg-[#EFF6F8] text-2xl" placeholder='Custom' onChange={(event) => setInputTip((event.target.value / 100) + 1)}/>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="peopleAmtInput" className="block mb-2 text-lg text-[#064347] font-bold tracking-widest">Number of People</label>
              <input type="number" id="peopleAmtInput" className="block w-full p-4 text-gray-900 border-white rounded-lg placeholder:text-start bg-[#EFF6F8] text-end text-xl" placeholder="^" value={inputPeople} onChange={(event) => setInputPeople(event.target.value)}/>
            </div>
          </div>
          
          {/* column 2 */}
          <div className='rounded-xl bg-[#064347]'>
            <div className='p-10 flex justify-between'>
              <div>
                <h1 className='text-white'>Tip Amount</h1>
                <h2 className='text-gray-200 text-xs opacity-50'>/ Person</h2>
              </div>
              <div>
                <h3 className='text-[#2FBFAE] text-5xl'>${outputTipAmt.toFixed(2)}</h3>
              </div>
            </div>

            <div className='px-10 lg:pt-3 lg:pb-20 flex justify-between'>
              <div>
                <h1 className='text-white'>Total</h1>
                <h2 className='text-gray-200 text-xs opacity-50'>/ Person</h2>
              </div>
              <div>
                <h3 className='text-[#2FBFAE] text-5xl'>${outputTotal.toFixed(2)}</h3>
              </div>
            </div>

            <div className='p-10 grid grid-cols-1'>
              <button type="button" className="rounded-md py-3 bg-[#065657] hover:bg-[#A4E4DF] text-[#064347] text-2xl" onClick={inputClear}>RESET</button>
            </div>
            

          </div>

        </div>
      </div>
    </>
  )
}

export default MainPage
