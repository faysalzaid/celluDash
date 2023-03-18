import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import AddEventPopup from './AddEventPopup'

function Calendar() {

    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobar", "Novermber", "December" ]
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sutarday", "Sunday"]

    let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth(),
    currentDay = date.getDay()

    const displayTime = () => {
        let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds()

        document.querySelector('.hour').innerHTML = hour + ' : '
        document.querySelector('.minute').innerHTML = minute + ' : '
        document.querySelector('.second').innerHTML = second + ' '
    }

    setInterval(displayTime, 1000)

    const setCurrentDate = () => {
        let firstDayOfMonth = new Date(currentYear, currentMonth ,1).getDay(), // getting first day of moth
        lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // getting last day of moth
        lastDayOfMonth = new Date(currentYear, currentMonth , lastDateOfMonth).getDay(), // getting last day of moth
        lastDateOfLastMonth = new Date(currentYear, currentMonth ,0).getDate() // getting last day of moth
        let currentDate = document.querySelector('.current-date')
        let daysWrapper = document.querySelector('.days-wrapper')
        let days = ''

        for (let i = firstDayOfMonth; i > 0; i--) {
            days += `<li class=' not-active' >${lastDateOfLastMonth - i + 1}</li>`
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear()? "today" : ''
            days += `<li class=' ${isToday} w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-slate-100 hover:text-black cursor-pointer' >${i}</li>`
        }

        for (let i = lastDayOfMonth; i < 6; i++) {
            days += `<li class=' not-active' >${ i - lastDayOfMonth + 1}</li>`
        }

        currentDate.innerText = ` ${months[currentMonth]} ${currentYear} `
        daysWrapper.innerHTML = days

    }
    setTimeout(() => {
        setCurrentDate()
    }, 100);

    const prevMonth = () => {
        currentMonth = currentMonth - 1;

        if(currentMonth < 0) {
            date = new Date(currentYear, currentMonth)
            currentYear = date.getFullYear()
            currentMonth = date.getMonth()
        } else {
            date = new Date()
        }

        setCurrentDate()
    }

    const nextMonth = () => {
        currentMonth+=1

        if(currentMonth > 11) {
            date = new Date(currentYear, currentMonth)
            currentYear = date.getFullYear()
            currentMonth = date.getMonth()
        } else {
            date = new Date()
        }

        setCurrentDate()
    }

    const addEvent = () => {
        let popup = document.querySelector('.event-popup')
        popup.classList.add('showEvent')
    }

  return (
    <div className=' calendar-section w-full flex justify-center items-center overflow-scroll'>

    <div className=' today-display w-[300px] min-h-[250px] h-[550px] bg-black ml-2 rounded-l-2xl shadow-shadow3 flex flex-col justify-center items-center overflow-hidden'>
        <h1 className=' text-white'>
            <span className=' font-semibold text-lg font-sans left-month text-center'>{days[currentDay - 1]} - </span>
            <span className=' font-semibold text-lg font-sans left-month text-center'>{months[currentMonth]}</span>
            <span className=' font-semibold text-lg font-sans'> - {currentYear}</span>
        </h1>
        <h1 className=' text-white text-[80px] font-sans'>18</h1>
        <p className=' text-white time-container text-2xl'>
            <span className='font-sans hour'>07 : </span>
            <span className='font-sans minute'>59 : </span>
            <span className='font-sans second'>00 </span>
            <span className='font-sans am-pm'>AM</span>
        </p>
    </div>
      
      <div className=' calendar-box min-w-[330px] w-[80%] max-w-[450px] h-[550px] min-h-[550px] shadow-shadow3 rounded-r-2xl pl-10 pr-10 pt-[28px] pb-[28px] sm:pl-5 sm:pr-5 mr-2 overflow-hidden'>

        <div className=' flex items-center justify-around pb-3'>
            <BiChevronLeft className=' text-2xl box-content p-2 hover:bg-[#f5f5f5] hover:text-black rounded-full cursor-pointer' onClick={prevMonth} />
            <span className=' current-date text-lg '></span>
            <BiChevronRight className=' text-2xl box-content p-2 hover:bg-[#f5f5f5] rounded-full cursor-pointer hover:text-black' onClick={nextMonth} />
        </div>


        <div className=' mt-5'>
            <ul className='grid grid-cols-7 ml-auto mr-auto gap-2 font-semibold'>
                
                <li className=' text-center'>Sun</li>
                <li className=' text-center'>Mon</li>
                <li className=' text-center'>Tue</li>
                <li className=' text-center'>Wed</li>
                <li className=' text-center'>Thur</li>
                <li className=' text-center'>Fri</li>
                <li className=' text-center'>Sat</li>
            </ul>
        </div>


        <div className=' mt-2'>
           <ul className=' days-wrapper grid grid-cols-7 grid-rows-6 text-center gap-2 '>
           </ul>
        </div>

        <div className=' h-16 flex items-center justify-between pl-3 '>
            <div>
                <p className=' font-semibold'>Today</p>
                <p className=' text-lg'>18 March 2023</p>
            </div>
            <button type='button' className=' bg-orange-400 pt-2 pb-2 pr-5 pl-5 rounded-md text-black font-semibold ' onClick={addEvent}>Add Event</button>
        </div>

      </div>

      <AddEventPopup />


    </div>
  )
}

export default Calendar
