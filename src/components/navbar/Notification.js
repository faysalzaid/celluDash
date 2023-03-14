import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { GrFormNextLink } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'


function Notification() {

    const navigate = useNavigate()

    const handleNotification = () => {
        let popup = document.querySelector('.noti-popup')
        popup.classList.toggle('show')
    }

    const directToNotifications = () => {
        navigate('./messages')
    }


  return (
    <div className=' relative cursor-pointer' onClick={handleNotification} >

        <IoIosNotificationsOutline className=' notification-icon text-2xl' />

        <div className=' absolute top-[-8px] right-[-8px] bg-red-700 w-5 flex items-center justify-center rounded-full'>
          <p className=' p-0 translate-y-[-6%] text-[12px] text-white'>8</p>
        </div>
    
        <div className=' noti-popup absolute right-[50%] top-[100%] lg:w-[350px] h-[410px] p-2 bg-white shadow-shadow1 rounded-lg flex flex-col'>

            <div className=' w-full h-[calc(100%-50px)] mb-[10px] rounded-md flex flex-col overflow-hidden overflow-ellipsis gap-1'>

            <div className=' noti-card w-full h-[24%] bg-white flex rounded-md hover:bg-slate-50 pt-3 pb-3 cursor-pointer' onClick={directToNotifications}>
                <div className=' w-[30%] max-w-[120px] flex items-center justify-center border-r border-black'>
                    <img className=' h-[70px] w-[80px] rounded-lg' src='https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='sawir' />
                </div>
                <div className=' w-[70%] pl-3 pr-2 flex flex-col justify-center'>
                    <h2 className=' font-medium whitespace-nowrap overflow-hidden text-ellipsis'>Ibrahim Yusuf</h2>
                    <p className=' text-[15px] whitespace-nowrap overflow-hidden text-ellipsis'>Neque porro hhjhb fdf gW</p>
                    <p className=' text-sm text-gray-600 font-sans whitespace-nowrap overflow-hidden text-ellipsis'>09:30am</p>
                </div>
            </div>

            <div className=' noti-card w-full h-[24%] bg-white flex rounded-md hover:bg-slate-50 pt-3 pb-3 cursor-pointer' onClick={directToNotifications}>
                <div className=' w-[30%] max-w-[120px] flex items-center justify-center border-r border-black'>
                    <img className=' h-[70px] w-[80px] rounded-lg' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' alt='sawir' />
                </div>
                <div className=' w-[70%] pl-3 pr-2 flex flex-col justify-center'>
                    <h2 className=' font-medium whitespace-nowrap overflow-hidden text-ellipsis'>Ibrahim Yusuf</h2>
                    <p className=' text-[15px] whitespace-nowrap overflow-hidden text-ellipsis'>Neque porro hhjhb fdf gW</p>
                    <p className=' text-sm text-gray-600 font-sans whitespace-nowrap overflow-hidden text-ellipsis'>09:30am</p>
                </div>
            </div>

            <div className=' noti-card w-full h-[24%] bg-white flex rounded-md hover:bg-slate-50 pt-3 pb-3 cursor-pointer' onClick={directToNotifications}>
                <div className=' w-[30%] max-w-[120px] flex items-center justify-center border-r border-black'>
                    <img className=' h-[70px] w-[80px] rounded-lg' src='https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8=' alt='sawir' />
                </div>
                <div className=' w-[70%] pl-3 pr-2 flex flex-col justify-center'>
                    <h2 className=' font-medium whitespace-nowrap overflow-hidden text-ellipsis'>Ibrahim Yusuf</h2>
                    <p className=' text-[15px] whitespace-nowrap overflow-hidden text-ellipsis'>Neque porro hhjhb fdf gW</p>
                    <p className=' text-sm text-gray-600 font-sans whitespace-nowrap overflow-hidden text-ellipsis'>09:30am</p>
                </div>
            </div>

            <div className='noti-card w-full h-[100px] bg-white flex rounded-md hover:bg-slate-50 pt-3 pb-3 cursor-pointer' onClick={directToNotifications}>
                <div className='w-[30%] max-w-[120px] flex items-center justify-center border-r border-black'>
                    <img className=' h-[70px] w-[80px] rounded-lg' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' alt='sawir' />
                </div>
                <div className=' w-[70%] pl-3 pr-2 flex flex-col justify-center'>
                    <h2 className=' font-medium whitespace-nowrap overflow-hidden text-ellipsis'>Ibrahim Yusuf</h2>
                    <p className=' text-[15px] whitespace-nowrap overflow-hidden text-ellipsis'>Neque porro hhjhb fdf gW</p>
                    <p className=' text-sm text-gray-600 font-sans whitespace-nowrap overflow-hidden text-ellipsis'>09:30am</p>
                </div>
            </div>

            </div>

            <div className=' see-more-noti w-full h-[46px] bg-orange-400 rounded-md flex items-center justify-center gap-2 hover:bg-orange-500' onClick={directToNotifications}>
                <span className=' text-lg'>See All Messages</span>
                <GrFormNextLink className=' text-lg' />
            </div>
        </div>
 </div>
  )
}

export default Notification
