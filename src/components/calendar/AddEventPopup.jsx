import React from 'react'

function AddEventPopup() {

    const cancelEvent = () => {
        let popup = document.querySelector('.event-popup')
        popup.classList.remove('showEvent')
    }
  return (
    <div className=' event-popup w-[80%] max-w-[400px] min-w-[300px] overflow-hidden h-[300px] bg-slate-50 rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-shadow1 pl-6 pr-6 hidden'>
       
       <p className=' text-lg font-semibold normal-text text-center pt-3 pb-3'>Create an Event</p>

      <div className=' flex flex-col items-center'>
        <label className=' w-full'>Date</label>
        <input type={'date'} className=' w-full pl-3 pr-3 border border-gray-300 h-[40px] outline-none rounded-md text-md   bg-transparent' />
      </div>

      <div className=' flex flex-col items-center mt-3'>
        <label className=' w-full'>Event</label>
        <textarea className=' w-full pl-3 pr-3 pt-3 pb-3 resize-none border border-gray-300 h-[80px] outline-none rounded-md text-md  bg-transparent' />
      </div>

      <div className='flex mt-3 justify-end gap-3'>
        <button type='button' className=' justify-self-end h-[40px] w-[80px] bg-gray-200 text-black font-medium rounded-lg  ' onClick={cancelEvent}>Cancel</button>
        <button type='button' className=' justify-self-end h-[40px] w-[100px] bg-indigo-600 text-white font-semibold rounded-lg  '>Add Event</button>
      </div>

    </div>
  )
}

export default AddEventPopup
