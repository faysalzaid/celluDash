import React from 'react'
import { RxCross2 } from 'react-icons/rx'

function ZooImage() {

    const cancelZoom = () => {
        let zoomPopup = document.querySelector('.zoom-popup')
        zoomPopup.style.display = 'none'
    }

  return (
    <div className=' zoom-popup hidden w-[300px] h-[300px] bg-white shadow-shadow4 rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <div className=' relative bg-slate-100 h-full flex items-center justify-center'>
        <RxCross2 className=' cancel-zoom absolute right-2 top-2 p-2 box-content text-2xl bg-slate-100 rounded-full cursor-pointer' onClick={cancelZoom} />
        <p id='image-link'>The Person Image Will Be Here</p>
      </div>
    </div>
  )
}

export default ZooImage
